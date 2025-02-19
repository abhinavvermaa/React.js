import React from 'react'
import CountdownTimer from './CountdownTimer'

const Deals = () => {
  return (
    <div className='bg-rose-50 text-gray-900 sm:px-20 py-5 flex flex-row flex-wrap items-center justify-between  '>
      <div  className='m-10'><h1 className='text-3xl font-bold'>Deals of the month </h1>
      
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nobis delectus esse quasi.</p>
      <button className='bg-black p-3 border-transparent rounded-2xl text-white my-2'>BUY NOW</button>
      <h2 className='font-semibold text-xl'>Hurry, Before it's too late</h2>
      <CountdownTimer targetDate='2025-03-1'/></div>
      <div className='m-10'>
        <img src=".\offer\75d.jpg" className=" rounded-lg w-full "alt="" />
      </div>
    </div>
  )
}

export default Deals
