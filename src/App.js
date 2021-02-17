import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

 const AppForm = () => {
   const [data ,setData] = useState({
     firstName:"",
     lastName:"",
     email:"",
     city:"",
     address:""
   });

  //  const handleFirstNameChange = (e) => {
  //    setData({firstName:e.target.value});
  //  };

  //  const handleLastNameChange = (e) => {
  //   setData({LaststName:e.target.value});
  // };

  // const handleEmailChange = (e) => {
  //   setData({email:e.target.value});
  // };

  // const handleCityChange = (e) => {
  //   setData({city:e.target.value});
  // };

  // const handleAddressChange = (e) => {
  //   setData({address:e.target.value});
  // };
   const handleChange = (e) => {
   const {name,value} = e.target;
   console.log("name",name);
   setData({...data, [name]:value})
   };

  
  // const handleSubmit = (e) =>{
  //   e.preventDefault();
    
  //    console.log("1",data);
  //    document.getElementById('list')
    
  // }
  // console.log("data", data)
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };
  // const handleSubmit = (event) => {
  //   const formData = new FormData(event.target);
  //   event.preventDefault();
  //   for (let [key, value] of formData.entries()) {
  //       console.log(key, value);
  //   }
  // }
  
  
   
  return (
    <div className="App">
      <div className="form-start">
      <form className="form" onSubmit={onSubmit}>
        <div className="heading"><h1>React Form</h1></div>
        <div className="input">
        <h4>Firstname:<input type="text" name="firstName" placeholder="firstName" value={data.name} onChange={(e)=>handleChange(e)}/></h4> 
          <h4>Lastname: <input type="text" name="lastName" placeholder="lastName" value={data.name} onChange={(e)=>handleChange(e)}/></h4> 
        </div>

        <div className="input">
         <h4>EmailId.:<input type="text" name="email" placeholder="Email" value={data.name} onChange={(e)=>handleChange(e)}/></h4> 
         <h4>Cityname: <input type="text" name="city" placeholder="City" value={data.name} onChange={(e)=>handleChange(e)}/></h4> 
        </div>

        <div className="input">
        <h4>Address: <input type="text" name="address" placeholder="Address" value={data.name} onChange={(e)=>handleChange(e)}/></h4> 
        </div>
        <button type="submit" >Submit</button>
      </form>
      </div>
      <div className="detail">
        <ul id="list">
      <li>{data.firstName}</li>
      <li>{data.lastName}</li>
      <li>{data.email}</li>
      <li>{data.city}</li>
      <li>{data.address}</li>
      </ul>
      {/* <h5>{data}</h5> */}
      </div>
    </div>
  );
}


 export default AppForm;
