import React, { useState } from "react";
import "./form.css";
import Star from "../../assets/Star";
export const Form = (props) => {

  return (
    <div className="main w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="frame items-center justify-center w-[350px] h-[450px]  rounded-md flex-column  overflow-hidden">
        <div className="header flex items-center justify-center md:text-4xl font-medium p-6">
         {props.header}
        </div>  
        <div className="from ">
        <div className="body h-full w-full p-7">
          {props.body} 
          {props.Subbutton} 

         
        </div>
      </div>
    </div>
    </div>
  );
};
export const Label = (props) => {
  return (  
    <>
     <div className="username items-center justify-center flex p-2  ">
      <div className="username items-center justify-center flex  ">
        <div className="inputgroup bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm  " >
        
       {props.input}

        </div>
      </div>
      </div>
      
    </>
  );
  
  
};
export const Subbutton = (props) => {
  return (
    <div className="btnmain justify-end  flex p-4  ">
      <div className="btnbody p-4 items-end">
        <div className="w-24  bg-gradient-to-r from-purple-500 to-pink-500 rounded-md items-end justify-center flex">
          <button className="btn  w-24 h-8 bg-white m-[1px] rounded-md" >
           {props.value}
          </button>
        </div>
      </div>
    </div>
  );
};
export const Button=(props)=>{
  return(
     <div className={props.classNamebody ? props.classNamebody :'p-0.5 bg-black  h-[40px] w-[100px] justify-center items-center flex rounded-md'}>
    <input type="submit" value={props.name}  id={props.id} className={ props.classNameinner ? props.classNameinner +"w-full h-full justify-center items-center flex bg-white rounded-md":"w-full h-full justify-center items-center flex bg-white rounded-md"}/>
    </div> 
  )
}
export const AdminBtn=(props)=>{
  return(
    <div className=" w-[200px] h-full   flex p-3.5">
              <div className="w-full h-full bg-gradient-to-r from-pink-600 to-violet-600 p-0.5 rounded rounded-[10px]">
              <div className="w-full  bg-white  justify-center items-center flex rounded rounded-[10px]">{
                <div className="w-1/3 h-full flex justify-end items-center flex  ">{props.logo}</div>}
                <div className="w-2/3 h-full p-2  flex items-center">{props.name}</div>
                </div>
                </div>
            </div>
  )
} 
export const Cart=(props)=>{
  
  const [usestar, setusestar] = useState(false)

  const starhandle=()=>{
    const element=document.getElementById('')
  
      element.style.fill="yellow"
  
   
  }
  const cancelHandler=()=>{
    setusestar(false)
  }
  const color= "yellow"
  return(
  
 
     
       <div className=" w-full product  h-[300px] bg-gradient-to-r from-pink-500 to-violet-600 rounded-md">
         <div className="mainC w-full h-full p-0.5">
          <div className="imgc w-full bg-white h-3/4 rounded-t-md">
          <img src={props.image} className="image w-full h-full" />
          </div>
          <div className="DisC w-full h-1/4 bg-white  p-2 rounded-b-md">
           <div className="content w-full h-3/4 flex p-1  ">
             <div className="w-full h-full flex p-1 ">
             <div className="w-full">
              <div className="full">{props.productname}</div>
             <div className="price w-2/5 h-full">{props.price}</div>
             </div>
             <div className="star w-3/5  h-full  p-2 items-end justify-end flex">
               <div className=" flex w-full items-end justify-end ">
                
               
               <Star  fill={ "yellow"}   onClick={starhandle}  id={props.id}/>
               <Star fill={"yellow"} />
               <Star fill={"yellow"} />
               <Star fill={"yellow"} />
               <Star fill={""} />

               </div>

             </div>

             </div>
           </div>
           <div className="btn w-full h-1/4 p-2 items-end flex">
           <div className="btn w-1/2 h-1/4  justify-center items-center flex ">
           <button className=' w-[100px]  h -[20px] bg-blue-500 rounded-sm justify-center items-center flex'>{props.delete}</button>
           </div>
           <div className="btn w-1/2 h-1/4  flex  justify-center items-center">
           <button className=' w-[100px]  h-[20px] bg-blue-500 rounded-sm justify-center items-center flex'>{props.add}</button>
           </div> 
           </div>
          </div>
         </div>
       </div>
    

   
     
  )
}