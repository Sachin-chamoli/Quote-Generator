import React, { useEffect, useState } from 'react'

import './App.css';

function App() {
  const[advice, setAdvice] = useState('');
  useEffect(()=>{
    fetchAdvice();
  },[]);

  const fetchAdvice = async() =>{
     const data = await fetch("https://api.adviceslip.com/advice");
    const parsedData = await data.json();
    setAdvice(parsedData.slip.advice);
  }
  return (
    <>
    <div className="app">
      <div className="card">
        <h3 className='heading'>{advice}</h3>
      </div>
        <button className='button' onClick={fetchAdvice}>
          <span>Get A Quote</span>
        </button>
    </div>
  </>
  );
}

export default App;
