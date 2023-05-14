import React from 'react'
import { AdminBtn } from '../../infra'

function Banking() {
    const Data =[{
        Date:"Today",
        Link:""
    },{
        Date:"Yesterday",
        Link:""
    },{
        Date:"LastWeek",
        Link:""
    },{
        Date:"LastMonth",
        Link:""
    },{
        Date:"Total",
        Link:""
    }
]

const ProductDetails=[
   
    {
    ProductName:"Dress",
    Quantity:"7",
    Type:"Men'S",
    Brand:"Us polo",
    Amount:"8140",
},{

    ProductName:"Smartphone",
    Quantity:"10",
    Type:"I-phone 14-promax ",
    Brand:"Apple",
    Amount:"14140",
},{

    ProductName:"Smartphone",
    Quantity:"10",
    Type:"I-phone 14-promax ",
    Brand:"Apple",
    Amount:"14140",
},{

    ProductName:"Smartphone",
    Quantity:"10",
    Type:"I-phone 14-promax ",
    Brand:"Apple",
    Amount:"14140",
},{

    ProductName:"Smartphone",
    Quantity:"10",
    Type:"I-phone 14-promax ",
    Brand:"Apple",
    Amount:"14140",
},{

    ProductName:"Smartphone",
    Quantity:"10",
    Type:"I-phone 14-promax ",
    Brand:"Apple",
    Amount:"14140",
},]
  return (
    <div className=' main w-full h-full  flex '>
        <div className="body grid grid-cols-10 w-full h-full">
            <div className=" col-span-2 w-full h-full bg-white  justify-center items-center flex">
                <div className="cover w-full h-full justify-center items-center overflow-scroll ">
                {   
                Data.map((obj)=>(
                    <div className="today w-full h-[100px]  items-center justify-center flex p-3.5"> 
                    <AdminBtn
                     name={obj.Date}

                     />
                    </div>
                    ))
                    }

            </div>
           
            </div>
            <div className=" col-span-8 w-full h-full ">
               { 

               ProductDetails.map((obj)=>(
                <div className="section w-full h-[150px] bg-black  gap-2  overflow-hidden">
                    <div className="flex gap-0.5  h-full w-full p-2  ">
                    <div className="proname w-[250px] h-full bg-gradient-to-r from-pink-600 to-violet-500 justify-center item-center p-0.5 overflow-scroll">
                        <div className="w-full h-1/3 bg-white justify-center item-center text-[20px] font-medium flex p-2 text-violet-700">Product name</div>
                        <div className="w-full h-2/3 bg-white justify-center item-center flex p-5 font-medium">{obj.ProductName}</div>
                        </div>
                        <div className="quantity w-[150px] h-full bg-gradient-to-r from-pink-600 to-violet-500 justify-center item-center p-0.5">
                        <div className="w-full h-1/3 bg-white justify-center item-center text-[20px] font-medium flex p-2 text-violet-700">Quantity</div>
                        <div className="w-full h-2/3 bg-white justify-center item-center flex p-5 font-medium">{obj.Quantity}</div>
                        </div>
                        <div className="quantity w-[150px] h-full bg-gradient-to-r from-pink-600 to-violet-500 justify-center item-center p-0.5">
                        <div className="w-full h-1/3 bg-white justify-center item-center text-[20px] font-medium flex p-2 text-violet-700">Type</div>
                        <div className="w-full h-2/3 bg-white justify-center item-center flex p-5 font-medium">{obj.Type}</div>
                        </div><div className="quantity w-[150px] h-full bg-gradient-to-r from-pink-600 to-violet-500 justify-center item-center p-0.5">
                        <div className="w-full h-1/3 bg-white justify-center item-center text-[20px] font-medium flex p-2 text-violet-700">Brand</div>
                        <div className="w-full h-2/3 bg-white justify-center item-center flex p-5 font-medium">{obj.Brand}</div>
                        </div><div className="quantity w-[250px] h-full bg-gradient-to-r from-pink-600 to-violet-500 justify-center item-center p-0.5">
                        <div className="w-full h-1/3 bg-white justify-center item-center text-[20px] font-medium flex p-2 text-violet-700">Amount</div>
                        <div className="w-full h-2/3 bg-white justify-center item-center flex p-5 font-medium">{obj.Amount}</div>
                        </div>
                        
                        
                    </div>
                   
                </div>
                ))
              }
            </div>

        </div>

    </div>
  )
}

export default Banking