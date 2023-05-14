import React from 'react'
 import { Label, Subbutton } from '../../infra'
import { Form } from '../../infra'
import { useState } from 'react'
import eyeOff from "../../../assets/eyeoff.svg";
import eyes from "../../../assets/eye.svg"

function Signin() {
  return (
    <div>
      <Form
      header="Sigin"
      body= {<SiginForm/>}
      Subbutton={
      <Subbutton
      value="Login"/>}
      />
    </div>
  )
}

export const  SiginForm =()=> {
  

const initialvalue = {username:"", password:"", repassword:"", email:""}
const [eye, seteye] = useState(true);
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
const hideOn = () => {
 const password = document.getElementById("passwordlabel")
 if(password.type == "password"){
  password.type="text"
 }
  seteye(false);
};
const hideOff = () => {
  const password = document.getElementById("passwordlabel")
  if(password.type == "text"){
    password.type="password"
  }
 
  seteye(true);
}; 

  return (
    <>
    <Label
      input={
        <>
        < input
          className="name w-[250px] h-[35px]  rounded-sm  p-1 m-[1px] "
            onChange={handlechange}
            name="username"
            type="text"
            value={[valuel][""]}  
            onSelect={handleSelect}
            onMouseEnter={handleEnter}
            onMouseLeave={handleleave}
           
          />
           <label className="placeholder bg-white" id='username' > {"username"} </label>
           <div className="error w-full  username items-center justify-center left  text-sm font-medium  text-white relative">
             {
              err.username
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
                  <img src={eyeOff} onClick={hideOn} />
                  ) : (
                 <img src={eyes} onClick={hideOff} />
                    )}
              </label>
            </> }
             />      
    
   
     
      
           
    </>
  )
}




export default Signin