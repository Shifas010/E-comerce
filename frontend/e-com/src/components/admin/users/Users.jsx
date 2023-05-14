import React from 'react'
import User from '../../../assets/users'
import { AdminBtn } from '../../infra'

function Users() {
 const UserDetails=[{
  
  Name:"username",
  logo : <User/>
 },{
  Name:"Id ",
  logo : <User/>
},{
  Name:"Totalpurchise",
  logo : <User/>
},
{
  Name:'block'
}
]

  return (
    <div className='main h-full w-full bg-white'> 
    <div className="body h-full w-full p-2">
        <div className="users w-full h-[75px] flex gap-4 border ">{
          UserDetails.map((obj)=>(
         <AdminBtn
           name = {obj.Name}
           logo ={obj.logo}
         
         />))}
           

        </div>
    </div>
    
      </div>
  )
}

export default Users