import React, { useState } from 'react'
import Banking from '../Banking/Banking'
import Users from '../users/Users'
import { Button } from '../../infra'
import  Chervonup  from '../../../assets/chevron-up'
import ChervonDown from '../../../assets/chevron-down'
import Addproductssec from '../Addproducts/Addproducts'


function AdminHome() {  
const [Bankhandler, setBankhandler] = useState(false)  
const [userDetails, setuserDetails] = useState(true)
const [Addproducts, setAddproducts] = useState(false)


    
const  details =[
        {
            section:"TotalBanking",
            link:"",
            id:"TotalBanking"
        }, {
            section:"Users",
            link:"",
            id:"Users"
        }, {
            section:"SalesProgress",
            link:"",
            id:"SalesProgress"
        }, {
            section:"Addproducts",
            link:"",
            id:"Addproducts"
        }, 

    ]

   const price=[{
      header:"Today",
      price:"20k"
   },
   {
    header:"yesterday",
    price:"30k",
    up:"done"
 },{
    header:"lastweak",
    price:"400k"
 },{
    header:"lastMonth",
    price:"2000k",
    up:"done"
 },] 
 const onClickhandler=(e)=>{
    const id = e.target.id
    if( id == "TotalBanking" ){
        setAddproducts(false)
        setuserDetails(false)
        setBankhandler(true)
      

    } if(id == "Users"){
        setAddproducts(false)
        setBankhandler(false)
        setuserDetails(true)


    }if (id == "Addproducts"){
        setBankhandler(false)
        setuserDetails(false)
        setAddproducts(true)
        
        console.log(id);
    }
        
  
  

 }

  return (
    
    <div className='main w-full h-full bg-white  p-4 flex'>
        <div className="body bg-black w-full h-screen">
        <div className="calbody grid grid-cols-10 bg-black w-full h-full">
            <div className="lefSide bg-gradient-to-r from-pink-500 to-violet-600 w-full  col-span-2 p-0.">
                    <div className="w-full h-full bg-black">
                   { details.map((obj)=>(
                        <div className="userdeails w-full h-[100px]  flex justify-center items-center p-4">
                            <div className='cart-button bg-white w-[150px] rounded-md ' onClick={onClickhandler} > 
                            <Button 
                             name={obj.section}
                             classNamebody ="p-0.5 bg-gradient-to-r from-pink-600 to-violet-600  h-[40px] w-[150px] justify-center items-center flex rounded-md "
                             id={obj.id}

                             /> </div>
                        </div>
                        ))
                   }
                    </div>
           
            </div>
            <div className="lefSide  w-full  col-span-8 p-1    ">
            <div className="price  w-full h-[100px] p-2   flex gap-4  overflow-scroll">
                <div className="w-auto h-full flex gap-2 ">
            {
                price.map((obj)=>(
                <div className="price w-[250px]  border border-violet-600 h-full bg-white  justify-center items-center p-2 ">
                    <div className="head  w-full h-1/4 justify-center items-center flex text-[20px]  font-bold  flex ">
                        <div className="w=3/4">{obj.header}</div>
                         <div className=" w-1/4 justify-end items-end flex">
                            
                        {obj.up ?
                             <Chervonup 
                             fill={"green"}
                             /> 
                             :
                             <ChervonDown
                             fill={'red'}/> 
                        }
                            
                            </div>
                            </div>
                    <div className="price w-full h-3/4 justify-end items-end flex text-[30px] pr-4 text-violet-600 font-bold">{obj.price }</div>
                </div>
                ))
              
}
            </div>
            </div>
         
       {   Bankhandler &&  <Banking/> }
       {  Addproducts && <Addproductssec/>}
       {  userDetails && <Users/>}        
            
            
                   

            </div>
            </div>
        </div>
        

    </div>
 
  )
}

export default AdminHome