import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps,setSteps] =useState(0);
const increaseSteps = ()=>setSteps(steps+1);
useEffect(()=>{
    console.log(steps);
},[steps])
    return (
        <div style={{border: '2px solid red', margin:'10px'}}>
            <h2>This is my Watch</h2>
            <p>Steps:{steps}</p>
            <button onClick={increaseSteps}>De Dhor...</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;