import React from 'react'
 import { Label, Subbutton } from '../../infra'
import { Form } from '../../infra'
import eyeOff from "../../../assets/eyeoff.svg";
import eyes from "../../../assets/eye.svg"
import VlidationComponent from '../HighComponents';



 function SiginForm(props) {
const   {HideOff, HideOn ,HandleEnter, Handleleave, HandleSelect,HandleChange,ErrPassword,ErrUsername,eye,value,Data} = props 
console.log(props.name);
console.log(Data);
  return (
    <>
    <Label
      input={
        <>
        < input
          className="name w-[250px] h-[35px]  rounded-sm  p-1 m-[1px] "
            onChange={HandleChange}
            name="username"
            type="text"
            value={[value][""]}  
            onSelect={HandleSelect}
            onMouseEnter={HandleEnter}
            onMouseLeave={Handleleave}
           
          />
           <label className="placeholder bg-white" id='username' > {"username"} </label>
           <div className="error w-full  username items-center justify-center left  text-sm font-medium  text-white relative">
             {
              ErrUsername
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
            onChange={HandleChange}
            name="password"
            type="password"
            value={[value]['']}  
            onSelect={HandleSelect}
            onMouseEnter={HandleEnter}
            onMouseLeave={Handleleave}
            />
          
           <label className="placeholder bg-white" id='password'> {"password"} </label>
           <div className="error w-full  username items-center justify-center left  text-sm font-medium  text-white relative">
             {
              ErrPassword
             }
           </div>   
           
           
              <label className="icon p-2 items-end  ">    
                {" "}
                {eye ? (
                  <img src={eyeOff} onClick={HideOn} />
                  ) : (
                 <img src={eyes} onClick={HideOff} />
                    )}
              </label>
            </> }
             />             
    </>
    
  )
 
  
}

export default VlidationComponent(SiginForm)





