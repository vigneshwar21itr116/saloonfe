

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../IMg.jpg'

import './book.css';


function Booking() {
  const s = {
    color:'white',
    padding:'0px'
 };
 const s1={
  color:'white',
  textAlign:'center'
 }

 const [formData, setFormData] = useState({
  user: '',
  em: '',
  phone:'',
  
  appointmentDate: '',
 
 
  decType:'',
  
  
  // Initialize other form fields here
});
const handleChange = (e) => {
  const { name, value } = e.target;
    
 
    // Handle other input fields
    setFormData({
      ...formData,
      [name]: value,
    });
  
 
  

};
const handleFormSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://saloon-bee.onrender.com/submit-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 201) {
     
      alert("Booking Successfull");
    } else {
      alert("Errror")   
     }
  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="booking-form-background" >
      <div className="container-center">
        <div className="cardB">
          <div className="card-header">
            <h3 style={s1}>Book here</h3>
          </div>
          <div className="card-body">
            <form  onSubmit={handleFormSubmit}>
            <div className="grid-containerB">
    <div className="grid-itemB">
    <div className="form-group">
              <input type="text" id="user" name="user" className="form-control" placeholder="Username"  value={formData.user}
          onChange={handleChange}required/>
            </div> 
    </div>
    <div className="grid-itemB"> 
    <div className="form-group">
    <input type="text" id="em" name="em" className="form-control" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Enter a valid Email!" value={formData.em}
          onChange={handleChange}required/>
      </div>
  </div>
</div>
         
    
    <div className="form-group">
    
              <input type="tel" id="ph" name="ph" className="form-control" placeholder="Phone Number" pattern="[0-9]{10}" title="Enter a valid Phone number"  required/>
            </div> 
     
    
  

<div className="form-group">
  <label htmlFor="weddingDate" style={s}> Date:</label>
      <input type="date" id="weddingDate" name="weddingDate" className="form-control"  value={formData.weddingDate}
          onChange={handleChange} required />
</div>


  <label htmlFor="ceremonyTime" style={s}> Timing:</label>
    <div className="grid-containerB" style={{overflow:"hidden",padding:"0px",margin:"0px"}}>
    <div className="grid-itemB">
    <div className="form-group" style={{width:"90%"}}>
     <input type="time" id="ceremonyTime" name="ceremonyTime" className="form-control" placeholder="start time" required />
     </div>
    </div>
    
  </div>

 
    
    
             
    
    
    <div className="form-group">
    <select id="decType" name="decType" className="form-select"  value={formData.decType}
                 onChange={handleChange}>
                <option value="type">--Service Type--</option>
                <option value="haircut">Hair Cut</option>
                <option value="spa">Beard trim</option>
              
              </select>
            </div>
             




            <div className="form-group">
    <select id="decType" name="decType" className="form-select"  value={formData.decType}
                 onChange={handleChange}>
                <option value="type">--ADVANCE payment--</option>
                <option value="haircut">Paid</option>
                <option value="spa">Not paid</option>
              
              </select>
            </div>
      
    
       
       
       
       
       
              <div className="form-group">
                <textarea
                  id="additionalComments"
                  name="additionalComments"
                  className="form-control"
                  rows="4"
                  placeholder="Any other specific requests or comments"
                />
              </div>
              {/* Terms and Conditions */}
              <div className="form-check">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  className="form-check-input"
                  required
                />
                <label htmlFor="agreeTerms"style={s} className="form-check-label " >
                  I agree to the Terms and Conditions<br></br>

                <p>if you have paid advance, your slot will be booked,otherwise you have to wait for the slot. </p>
                </label>
              </div><br/>
            
              <div className="form-group"> &emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;
                <button type="submit" className="btn-success" >
                Book Now!
                </button>
              </div>
            </form>
          </div><br/>
          <div className="card-footer">
            <div className="links" style={{color:"white",textAlign:"center"}}>
              Want to cancel your booking?
              <Link to="" className='red'>&emsp;Cancel Booking</Link>

              <br></br><br></br> <br></br>PAYMENT

              <img src={img1}></img>
            </div>
          </div>
        </div>
      </div>
      
      </div>
    
  );
}

export default Booking;