import React from 'react'
import './item.css'
import {Link} from "react-router-dom"

import Image from '../../../assets/HazelnutChocolatePralineCookies.jpg'
import { Button } from '../../infra'



function ProductDetails() {

    const sampleImg=[
        {
            image:'',
            link:''
        }, {
            image:'',
            link:''
        }, {
            image:'',
            link:''
        }, {
            image:'',
            link:''
        },
    ]
  return (
    <div className='main w-full h-screen  grid-cols-2 p-8'>
        <div className="rightP w-full h-full  flex ">
            <div className="view w-1/4 h-full flex justify-end items-end ">
                <div className="Viewcollection w-2/4  h-full  p-1  gap-2 overflow-scroll">
                    {
                        sampleImg.map((obj)=>
                    <div className="onebyone w-full h-[100px] bg-gradient-to-r to-pink-600 from-violet-600 mt-2 p-0.5">
                        <div className="onebyoneBdy w-full h-full bg-white" ></div>
                       
                    </div>
                        )
                    }
             </div> 
             </div>
            <div className="side h-full w-3/4  p-4 ">
                <div className="sideM w-full h-5/6 bg-slate-50 border border-violet-500 flex"> </div>
                <div className="sideM w-full h-1/6  flex p-4 gap-4 justify-center">
                    <Button 
                    name="Buy Now"
                    classNamebody="p-0.5 bg-gradient-to-r from-pink-600 to-violet-600  h-[40px] w-[100px] justify-center items-center flex rounded-md ':'p-0.5 bg-gradient-to-r from-pink-600 to-violet-600  h-[40px] w-[100px] justify-center items-center flex rounded-md "
                    />
                     <Button 
                    name="Add to cart"
                    classNamebody="p-0.5 bg-gradient-to-r from-pink-600 to-violet-600  h-[40px] w-[100px] justify-center items-center flex rounded-md ':'p-0.5 bg-gradient-to-r from-pink-600 to-violet-600  h-[40px] w-[100px] justify-center items-center flex rounded-md "
                    />
                </div>

            </div>
            
           

        </div>
        <div className="rightP w-full h-full  border border-violet-500">
            <div className="p-4">
            <div className="proheader w-full h-[50px] p-2">product name</div>
            <div className="proheader w-full h-[50px] p-2"> brand</div>
            <div className="prodetails w-full h-[500px]  p-2">
                   <div className="h-3/4 w-full  p-4 ">Details</div>
                   <div className="h-1/4 w-full p-4 items-end justify-end flex gap-2">
                    <Button
                    name= 'More details'
                    classNamebody="p-0.5 bg-gradient-to-r from-pink-600 to-violet-600  h-[40px] w-[100px] justify-center items-center flex rounded-md "
                    
                    />
                    <Button
                    name= 'Buy'
                    classNamebody="p-0.5 bg-gradient-to-r from-pink-600 to-violet-600  h-[40px] w-[100px] justify-center items-center flex rounded-md "
                    
                    />

                   </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default ProductDetails