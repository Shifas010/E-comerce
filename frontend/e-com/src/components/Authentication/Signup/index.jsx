import React from 'react'
 import { Label, Subbutton } from '../../infra'
import { Form } from '../../infra'
import { useState } from 'react'
import eyeOff from "../../../assets/eyeoff.svg";
import eyes from "../../../assets/eye.svg"



export const  SignupForm =()=> {
  

const initialvalue = {username:"", password:"", repassword:"", email:""}
const [eye, seteye] = useState(true);
const [reeye,setReye]= useState(true)
const [err, seterr] = useState("");
const [valuel, setvaluel] = useState(initialvalue)
const [Select, setSelect] = useState(true)


const  handlechange = (e) => {
    
  const {name , value } = e.target;
  setvaluel({...valuel ,[name] :value})
  const errors =validate(valuel);
  seterr(errors)



}

const handleSelect =(e)=>{
  const name = e.target.name;
  const inputElement = document.getElementById(name);
  if (name) {   
    if (inputElement) {
       inputElement.style.top = "-12px";
    }
  }
  setSelect(false)

}

const handleleave = (e) => {
  const data = e.target.value.length;
  const name = e.target.name;
  const inputElement = document.getElementById(name);
  if (name) {
    
     if (inputElement && data === 0 && Select == true ) {
      inputElement.style.top = "5px";
    
  }}
};
const handleEnter = (e)=>{
  const name = e.target.name;
  const inputElement = document.getElementById(name);
  if (name) {   
    if (inputElement) {
       inputElement.style.top = "-12px";
    }
  }
  setSelect(true)

}
const validate=(value)=>{
  let errors ={}
  if(value.username.length <= 2 ){
    errors.username='username must be 2 char'
  }else if( value.password != "Shif@me3060" ){
    errors.password = "password  or username are incorrect "
  }

 return errors
}
const hideOn = (e) => {
const data = e.target.id
  if(data === "pass" || data === "pass1" ){
    seteye(false);
    var id = "passwordlabel"
  }else if(data === "pass2" || data === "pass3"){
    setReye(false)
    var id = "Repasswordlabel"
  }
 const password = document.getElementById(id)
 if(password.type === "password"){
  password.type="text"
 }
  

 
  
};
const hideOff = (e) => {
  const data = e.target.id
  if(data == "pass" || data == "pass1"){
    var id = "passwordlabel"
    seteye(true) 
  }else if(data == "pass2" || data == "pass3"){
    var id = "Repasswordlabel"
    setReye(true)
  }
  const password = document.getElementById(id)
  if(password.type == "text"){
    password.type="password"
  }
  

}; 

  return (
    <>
    <Label
      input={
        <>
        < input
          className="name w-[250px] h-[35px]  rounded-sm  p-1 m-[1px] "
            onChange={handlechange}
            name="email"
            type="email"
            value={[valuel][""]}  
            onSelect={handleSelect}
            onMouseEnter={handleEnter}
            onMouseLeave={handleleave}
           
          />
           <label className="placeholder bg-white" id='email' > {" email"} </label>
           <div className="error w-full  username items-center justify-center left  text-sm font-medium  text-white relative">
             {
              err.email
             }
           </div>   
           
              
            </> 
      }
             />
     <Label
      input={
        <>
        <input
          className="name w-[250px] h-[35px]  rounded-sm  p-1 m-[1px] "
            onChange={handlechange}
            name="username"
            type="text"
            value={[valuel]['']}  
            onSelect={handleSelect}
            onMouseEnter={handleEnter}
            onMouseLeave={handleleave}
            />
          
           <label className="placeholder bg-white" id='username'> {"username"} </label>
           <div className="error w-full  username items-center justify-center left  text-sm font-medium  text-white relative">
             {
              err.username
             }
           </div>   
            </> }
             />      
     <Label
      input={
        <>
        <input
          className="name w-[250px] h-[35px]  rounded-sm  p-1 m-[1px] "
            id='passwordlabel'
            onChange={handlechange}
            name="password"
            type="password"
            value={[valuel]['']}  
            onSelect={handleSelect}
            onMouseEnter={handleEnter}
            onMouseLeave={handleleave}
            />
          
           <label className="placeholder bg-white" id='password'> {"password"} </label>
           <div className="error w-full  username items-center justify-center left  text-sm font-medium  text-white relative">
             {
              err.password
             }
           </div>   
           
           
              <label className="icon p-2 items-end  ">    
                {" "}
                {eye ? (
                  <img src={eyeOff} onClick={hideOn} id='pass' />
                  ) : (
                 <img src={eyes} onClick={hideOff} id='pass1'  />
                    )}
              </label>
            </> }
             /> 
                  <Label
      input={
        <>
        <input
          className="name w-[250px] h-[35px]  rounded-sm  p-1 m-[1px] "
            id='Repasswordlabel'
            onChange={handlechange}
            name="re-password"
            type="password"
            value={[valuel]['']}  
            onSelect={handleSelect}
            onMouseEnter={handleEnter}
            onMouseLeave={handleleave}
            />
          
           <label className="placeholder bg-white" id='re-password'> {"password"} </label>
           <div className="error w-full  username items-center justify-center left  text-sm font-medium  text-white relative">
             {
              err.password
             }
           </div>   
           
           
              <label className="icon p-2 items-end  ">    
                {" "}
                {reeye ? (
                  <img src={eyeOff} onClick={hideOn} id='pass2' />
                  ) : (
                 <img src={eyes} onClick={hideOff} id='pass3'  />
                    )}
              </label>
            </> }
             /> 
 
    
   
     
      
           
    </>
  )
}




export default SignupForm