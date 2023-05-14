import React from 'react'
import { Cart, Subbutton } from '../../infra'
import { Label } from '../../infra'
import { useState } from 'react'

function Addproducts() {
  
  const initialvalue = { ProductName:"", Price:"", Discription:"", email:""}
  const [err, seterr] = useState("");
  const [valuel, setvaluel] = useState(initialvalue)
  const [Select, setSelect] = useState(true)
  const [sandles, setSandels]= useState(false)
  const [details, setDetails] = useState(false)
  

  const  handlechange = (e) => {
      
    const {name , value } = e.target;
    setvaluel({...valuel ,[name] :value})
    const errors =validate(valuel);
    seterr(errors)  
  
  }

  const validate=(value)=>{
  let errors ={}
  if(value.ProductName.length <= 2 ){
    errors.username='username must be 2 char'
  }else if( value.password != "Shif@me3060" ){
    errors.password = "password  or username are incorrect "
  }

 return errors
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
    if(name == "Discription"){
      setDetails(true)
    }else if (name != "Discription"){
      setDetails(false)
    }
  
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
    if (name == "Category"){
      
    setSandels(true)

    }
  
  } 
const name="Sandel"
  return (
    <div className='w-full h-full bg-gradient-to-r from-violet-600 to-pink-500 p-0.5'>
        <div className="w-full h-full bg-white flex ">
            <div className="left w-1/4 h-full bg-white  p-4  justify-center flex">
                <div className="w-full h-full mt-2 bg-white">
                 <Label
                 input = {
                  <>
                  <input
                  className="name w-[250px] h-[35px]  rounded-sm  p-1 m-[1px] "
                    name="ProductName"
                    type="ProductName"
                    value={[valuel][""]}  
                    onSelect={handleSelect}
                    onChange={handlechange}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleleave}
                    />
                    <label className="placeholder bg-white" id='ProductName'> {"ProductName"} </label>
                    </>
                 }
                
                />
             <Label
                 input = {
                  <>
                  <input
                  className="name w-[250px] h-[35px]  rounded-sm  p-1 m-[1px] "
                    name="ProductId"
                    type="ProductId"
                    value={[valuel][""]}  
                    onSelect={handleSelect}
                    onChange={handlechange}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleleave}
                    />
                    <label className="placeholder bg-white" id='ProductId'> {"ProductId"} </label>
                    </>
                 }
                
                />
              <Label
                 input = {
                  <>
                  <select
                   className="name w-[250px] h-[35px]  rounded-sm  p-1 m-[1px] "
                    name="Category"
                    type="select"
                    value={[valuel][""]}  
                    onSelect={handleSelect}
                    onChange={handlechange}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleleave}
                    >
                 
                    <option value="12">{ sandles && name}</option>
                    <option value="12">Dress</option>
                    <option value="12">Cosmatics</option>
  
                   </select>
                   <label className="placeholder bg-white" id='Category'> {"Category"} </label>
                    </>
                   
                 }
                
                />
                <Label
                 input = {
                  <>
                  <input
                  className="name w-[250px] h-[35px]  rounded-sm  p-1 m-[1px] "
                    name="Price"
                    type="number"
                    value={[valuel][""]}  
                    onChange={handlechange}
                    onSelect={handleSelect}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleleave}
                    />
                    <label className="placeholder bg-white" id='Price'> {"Price"} </label>
                    </>
                 }
                />
             <Label
                 input = {
                  <>
                  <input
                  className="name w-[250px] h-[35px]  rounded-sm  p-1 m-[1px] "
                    name="Discription"
                    type="Text"
                    value={[valuel][""]} 
                    onChange={handlechange} 
                    onSelect={handleSelect}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleleave}
                    />
                    <label className="placeholder bg-white" id='Discription'> {"Discription"} </label>
                    </>
                 }
                />
                 <Label
                 input = {
                  <>
                  <input
                  className="name w-[250px] h-[35px]  rounded-sm  p-1 m-[1px] "
                    name="Brand"
                    type="Text"
                    value={[valuel][""]} 
                    onChange={handlechange} 
                    onSelect={handleSelect}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleleave}
                    />
                    <label className="placeholder bg-white" id='Brand'> {"Brand"} </label>
                    </>
                 }
                />

                </div>
            </div>
            <div className="bg-yellow-200 w-3/4 ">
              <div className="right h-5/6 flex justify-center items-center">
              {
                details &&
              <div className="w-[400px] h-[400px] flex bg-white z-20 justify-center  p-4">
                <div className="w-full h-full p-1 border border-black font-bold"><h1>Discription :</h1>{valuel.Discription}
                </div>
                </div>}
                <div className="w-[300px] h-[400px] flex z-10 absolute">
                  <Cart
                  price={ valuel.Price}
                  productname={valuel.ProductName}
                  delete={false}
                  
                  
                  />
                  
                </div>  
                </div>
                
                <Subbutton
                value="submit"
                name/>
             
                </div>
               
        </div>
    </div>
  )
}

export default Addproducts