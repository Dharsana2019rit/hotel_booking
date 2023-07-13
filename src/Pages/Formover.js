import React from 'react'
import complete from '../complete.svg'

function Formover() {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={complete} alt='success-image' />
    </div>
  );
};


export default Formover