import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps,setSteps] =useState(0);
const increaseSteps = ()=>setSteps(steps+1);
useEffect(()=>{
    console.log(steps);
},[steps])
    return (
        <div>
            <h2>This is my Watch</h2>
            <p>Steps:{steps}</p>
            <button onClick={increaseSteps}>De Dhor...</button>
        </div>
    );
};

export default Watch;