import React, { useState } from 'react'
import Background from '../Background/Background'
import Hero2 from '../hero2/Hero2'
import { useEffect } from 'react';



const App = () => {
  let heroData = [
    {text1:"Dive into", text2:"what you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to ", text2:"your passions"}
  ]
const [heroCount, setHeroCount] = useState(2);
const[playStatus, setPlayStatus] = useState(false);

useEffect(() => {
  setInterval(() => {
    setHeroCount((count) => (count === 2 ? 0 : count + 1));
  }, 3000);
}, []);

  return (
  <div>
  <Background playStatus={playStatus} heroCount={heroCount}/>
  
<Hero2
  setPlayStatus={setPlayStatus}
heroData={heroData[heroCount]}
heroCount={heroCount} 
setHeroCount={setHeroCount}
playStatus={playStatus}
/>
  </div>

 
  )
}

export default App