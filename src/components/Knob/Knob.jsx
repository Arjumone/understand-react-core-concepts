import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border:'2px solid yellow', margin:'20px'}}>
           <h5>This is knob components</h5>
           <p>Steps here is:{props.steps}</p> 
        </div>
    );
};

export default Knob;