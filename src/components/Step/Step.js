import React, { useState } from 'react';
import './Step.css';

const Step = () => {
     const [steps, setSteps] = useState(0);
     const increaseSteps = () => {
          const newSteps = steps + 1;
          setSteps(newSteps);
     }
     return (
          <div className="steps">
               <h3>Count steps : {steps} </h3>
               <button onClick={increaseSteps}> Hit the step button</button>
          </div>
     );
};

export default Step;