import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const[activity, setActivity] = useState("");
  const [style, setStyle] = useState("text-activity-one");

  const changeStyle = () => {

  
    setStyle("text-activity-two");
  };
  

   useEffect(()=>{
    getActivity();
   }, [])

   const getActivity = async() => {
    const textActivity = await fetch (`http://www.boredapi.com/api/activity/`);
    const data = await textActivity.json();
    setActivity(data.activity)
   }


  return (
    <div className="App">
      <div className='text'>
      <h1 class="title">
    <span class="title-word title-word-1">What </span>
    <span class="title-word title-word-2">can </span>
    <span class="title-word title-word-3">I </span>
    <span class="title-word title-word-4">do...</span>
  </h1>

  <div className='block'>
    
      <p className={style}>{activity}</p>
     
      <div className='btn'>
      <button  onClick={() => {getActivity(); changeStyle();}}>SHOW</button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
