import React from 'react';
import { useNavigate } from 'react-router-dom';
import {AiFillCloseCircle} from "react-icons/ai"
import { Button } from "antd";
import "./Payment.css";


export const CardAddress = () => {

    const nav = useNavigate();
    
  return (
    <>
    <div className='cardinfomain'>
      <div className='carttitle1'>
          <div className='CICA'>Card Information</div>
          <div className='closelogoCA'> <AiFillCloseCircle/></div>
      </div>
      <div className='creditinfo1'>
           <div className='card11'>
               <p>Credit card type</p>
               <select className='card11select'>
                   <option>American Express</option>
               </select>
            </div> 
            <div className='card11'>
               <p>Name on Card</p>
              
                <input type="text" placeholder='Name on card' />
              
            </div> 
      </div>
      <div className='creditinfo1'>
          
            <div className='cardnumber'>
               <p>Card number</p>
              
                <input type="text" placeholder='Name on card' />
              
            </div> 
 
            <div className='cardEM'>
               <p>Exp Month</p>
              
                <input type="text" placeholder='Name on card' className='card13select'/>
              
            </div> 
            <div className='cardEM'>
               <p>Exp Year</p>
              
                <input type="text" placeholder='Name on card' className='card13select'/>
              
            </div>          
      </div>

      <div className='check1'>
          <input type="checkbox" />
          <span>Save this card for next time</span>
      </div>
      <div className='check1'>
          <input type="checkbox" />
          <span>Set as default</span>
      </div>
      <div className='heading'>
          <p style={{marginTop: '15px', paddingLeft: "10px"}}>Default payment methods will be added to your Express Pay setting
              for your next purchase.
          </p>
      </div>
      <div >
          <h3>Billing Information</h3>
          <p>Mayur w</p>
          <p>london street</p>
          <p>londeon,TX united States,75216</p>
          <p>Phone: 8208663529</p>
         
      </div>
      <div className='btns'>
            <Button className='blue' onClick={()=>{
                alert("Your order has been placed Successfully. Thank you for Shopping!")
                nav("/");
            }}><p style={{marginTop:"-5px", color: "white"}}>Place Order</p></Button>
            <Button className='white'><p style={{marginTop:"-3px"}}>Close</p></Button>
      </div>
    </div>
   
    </>
  )
}

