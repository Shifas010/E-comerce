import React, { useState } from 'react'



 const VlidationComponent =(Orginalcomponents)=>{
    const NewComponents =()=>{
        
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
  
  console.log("enter");
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
        return <Orginalcomponents HideOff={hideOff} HideOn={hideOn} HandleEnter={handleEnter} Handleleave={handleleave} HandleSelect={handleSelect} HandleChange={handlechange} ErrPassword={err.pass}
        ErrUsername={err.username} eye={eye} Value={valuel  } name={"shifas"} Data={valuel}/>
        
    }
return NewComponents

 }
 export default VlidationComponent