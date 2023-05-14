import React from 'react'
import { Cart } from '../../infra'
import Image from '../../../assets/HazelnutChocolatePralineCookies.jpg'
function MYCart() {
  return (
    <div className='bg-red-600 w-full h-screen flex'>
      <div className="p-4 h-full w-full flex">
      <div className="left w-1/4 h-full bg-green-600"></div>
      <div className="right w-3/4 bg-black h-full">
      <div className="grid col-span-10 md:col-span-8 h-full overflow-scroll ">
    <div className=" grid md:grid-cols-4 bg-violet-200 p-4  gap-4">
        <Cart
         image={Image}
         add="Buy"
         delete ="Delete"

         />
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default MYCart