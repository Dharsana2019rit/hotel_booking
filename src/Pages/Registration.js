import React, { useState } from 'react';
import './Registration.css'
import Form from './Form'
import Formover from './Formover'
import Carousel from '../Components/Carousel';
const Registration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className='regmain'>
    
   
      <div className='form-container'>
        <div className='form-content-left'>
          <Carousel/>
        </div>
       {!isSubmitted ? 
         (<Form submitForm={submitForm} />)
       :  
          <Formover/>
         }
        
      </div>
    </div>
  );
};

export default Registration;