import Form from 'react-bootstrap/Form';
import '../styles/Weight.css';

import { useState} from 'react';


function WeightSelection(){

  
  return(
    <Form.Select aria-label="Default select example" defaultValue="DEFAULT">
      <option value="DEFAULT" disabled hidden>Select</option>
      <option>Carats</option>
      <option>Grains</option>
      <option>Grams</option>
    </Form.Select>
  )
  
}


function Weight() {
  return(
    <>
      <div className='asd'>
        <WeightSelection></WeightSelection>
        <WeightSelection></WeightSelection>
        

        
      </div>
      
      <p></p>
      <p></p>



    </>
    
  )
}


export default Weight;
  