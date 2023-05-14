import React from 'react'
import './home.css'
import { useState } from 'react'
import Image from '../../../assets/HazelnutChocolatePralineCookies.jpg'
import {Cart} from '../../infra'
function Home() {
  const [usestar, setusestar] = useState(false)

 const cardImg =[
  {
  image:Image,
  link:""
 },
 {
  image:"",
  link:""
 }
 ,
 {
  image:"",
  link:""
 },
 {
  image:"",
  link:""
 },
 {
  image:"",
  link:""
 },
 {
  image:"",
  link:""
 },
 {
  image:"",
  link:""
 }


] 
const offer =[{
  image:Image,
  link:""
}]
const ProductImg =[{
  image:Image,
  content:"",
  link:"",
  id:"1"
},{
  image:"",
  content:"",
  link:"",
  id:"2"
},{
  image:"",
  content:"",
  link:"",
  id:"3"
},{
  image:"",
  content:"",
  link:"",
  id:"4"
},{
  image:"",
  content:"",
  link:"",
  id:"5"
},{
  image:"",
  content:"",
  link:"",
  id:"6"
},{
  image:"",
  content:"",
  link:"",
  id:"7"
},{
  image:"",
  content:"",
  link:"",
  id:"8"
},{
  image:"",
  content:"",
  link:"",
  id:"9"
},{
  image:"",
  content:"",
  link:"",
  id:"10"
},{
  image:"",
  content:"",
  link:""
},{
  image:"",
  content:"",
  link:""
},{
  image:"",
  content:"",
  link:""
},{
  image:"",
  content:"",
  link:""
},]
const starhandle=()=>{
  const element=document.getElementById('')

    element.style.fill="yellow"

 
}
const cancelHandler=()=>{
  setusestar(false)
}
const color= "yellow"

  return (
    <div className='main w-full h-full  bg-black'>
        <div className="body w-full h-screen  absolute p-4">
            <div className=" scrollbarH  bg-violet-200 h-[120px] p-2  w-full gap-4 flex overflow-scroll ">
              
              <div className="cartH h-full w-auto flex gap-2">
                {
                  cardImg.map((obj)=>(
                <div className="product w-[150px] h-[100px] bg-gradient-to-r from-pink-500 to-violet-500  flex  rounded-md">
                  <div className="w-full p-[1px] ">
                  <div className="btnC  h-full bg-white    p-2 rounded-md " >
                    <div className="h-3/4 w-full flex  overflow-hidden">
                    <img src={obj.image} className="image w-full h-full scale-150 " />
                    </div>
                   <div className="h-1/4 w-full ">
                  <button className='bg-violet-400 w-full text-xs '>check</button></div>
                  </div>  
                  </div>
                
                </div>
                ))
}
                </div>
            </div>
  <div className="left h-full grid grid-cols-10">
    <div className="offerside grid col-span-2 bg-gradient-to-r from-pink-500 to-violet-500    w-full h-full p-0.5">
    
     <div className="offer1 w-full h-full bg-slate-50  p-4">

       {
         offer.map((obj)=>(
         <div className="h-5/6 w-full">
         <img src={obj.image} alt="" className='w-full h-full ' />
       
       </div>
       ))}
       <div className="w-full justify-end items-end flex p-2">
       <button className='w-[70px] h-[20px] bg-red-700  justify-center items-center flex rounded-sm '>Check</button>
     </div> 
     </div>
     <div className="offer2 w-full h-full flex  justify-end items-end p-4 bg-green-500">
       
     <button className='w-[70px] h-[20px] bg-red-700  justify-center items-center flex rounded-sm'>Check</button>
     </div>
    </div>

    <div className="grid col-span-10 md:col-span-8 h-full overflow-scroll ">
    <div className=" grid md:grid-cols-4 bg-violet-200 p-4  gap-4">
          
        { ProductImg.map((obj)=>( <Cart
           image={obj.image}
          />
          ))}
       
        
  </div>
  </div>
        </div>
    </div>
    </div>
  )
}

export default Home