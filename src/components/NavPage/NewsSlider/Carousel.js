import React, { useState } from 'react';
import './Caarousel.css';
function Carousel() {
  
  const words=[
    {id:0,value:"Strong winds and rains have lashed the Gujarat coast as Cyclone Biparjoy makes landfall in the state. The landfall will continue till midnight tonight."},
    {id:1,value:"A strong earthquake with a magnitude of 7.5 struck the Indonesian island of Sulawesi, triggering a tsunami. The disaster resulted in over 2,000 fatalities and significant damage in the city of Palu."},
    {id:2,value:"Strong winds and rains have lashed the Gujarat coast as Cyclone Biparjoy makes landfall in the state. The landfall will continue till midnight tonight."},
    {id:3,value:"Strong winds, rains lash Gujarat as Cyclone Biparjoy makes landfall; Govt approves procurement of Predator drones from US"},
    {id:4,value:"A strong earthquake with a magnitude of 7.5 struck the Indonesian island of Sulawesi, triggering a tsunami. The disaster resulted in over 2,000 fatalities and significant damage in the city of Palu."},
  ];
  const [wordData,setWordData]=useState(words[0].value)
  const handleClick=(index)=>{
    console.log(index)
    const wordSlider=words[index].value;
    setWordData(wordSlider)
  }
  return (
    <>
    <div className="slider">
    <div className="main">
      <div><h2>" {wordData} "</h2></div>
      
    </div>
    <div className='flex_row'>
        {words.map((data,i)=>
          <h1 key={i} onClick={()=>handleClick(i)}>.</h1>
        )}
      </div>
    </div>
    </>
  );
}

export default Carousel;