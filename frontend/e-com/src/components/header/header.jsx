import React from 'react'
import './header.css'
import Search from '../../assets/search.svg'
import UserIcon from '../../assets/user.jsx'
import Users from '../../assets/users.jsx'
import filter from '../../assets/filter.jsx'
import {Link }from 'react-router-dom'
import Home from '../../components/user/home/home'
import Cart from '../user/my-cart'
import Filter from '../../assets/filter.jsx'

function Header() {
 const loged =[
        {
         user:"Shifas"
        }
     ]

    const handleender =()=>{
      document.getElementsByClassName('headerbody')[0].style.backgroundColor=""
    }   
  return (
  
<div className="w-full">


      
    <div className='main w-full h-[70px] p-2' >
        <div className="headerbody w-full h-[50px] p-2 grid grid-cols-2 divide-x m-2"onMouseEnter={handleender}>
            <div className="p-2">
            <ul>
                <span> <Link to="Home"><li>Home</li></Link> </span>
    
            </ul>
            
            </div>
            <div className="justify-end items-end grid grid-cols-10 w-full">
                <div className=" col-span-8 w-full">
            <span><Link to="Cart"><li>My cart</li></Link></span>
            <span><Link to="Payment"><li>payments</li></Link></span>    
            <input className='searchbar w-[200px] border border-violet-800' type="text" /><button className='p-2'><img  src={Search} /></button>
        
            </div>
            
            <div className=" flex col-span-2 p-2  border border-violet-800 rounded-sm">
           <div className="div col-span-1  justify-start flex  w-full"><Users/></div>
           {loged.map((obj)=>
          obj.user &&(
           <div className="div col-span-1 justify-start flex items-end w-full p-m-2">{obj.user}</div>
          )
           )}

            </div>
            
            
                
          </div>

        </div>
      
       
        </div>
         

    </div>
  )
  

}


export default Header