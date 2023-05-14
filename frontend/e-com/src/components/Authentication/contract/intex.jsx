import React from "react"
import { Form } from "../../infra"
import { Subbutton } from "../../infra"
import SiginForm from '../Auth'
import SignupForm from "../Signup"
 export const  Signin=()=>{
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
export const SignUp=()=>{
    return (
      <div>
        <Form
        header="SignUp"
        body= {<SignupForm/>}
        Subbutton={
        <Subbutton
        value="Login"/>}
        />
      </div>
    )
  }