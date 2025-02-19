import React from 'react'

const NewArrivals = () => {
  return (
    <div className='sm:px-20 py-5 '>
      <header className="flex justify-center items-center flex-col">
        <h1 className="px-20 text-2xl font-semibold">NEW ARRIVALS</h1>
        <p className='px-5 py-2'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto similique animi maxime et, consectetur sint odit porro assumenda! Voluptas autem delectus enim error cupiditate fugiat.</p>
      </header>
      <ul className='mt-5 flex flex-row  justify-evenly'>
        <li className='hover:bg-gray-800 hover:text-white border-transparent rounded-lg bg-rose-100 px-5 py-2'>Men's Fashion</li>
        <li className='hover:bg-gray-800 hover:text-white border-transparent rounded-lg bg-rose-100 px-5 py-2'>Women Fashion</li>
        <li className='hover:bg-gray-800 hover:text-white border-transparent rounded-lg bg-rose-100 px-5 py-2'>Discount Deals</li>
        <li className='hover:bg-gray-800 hover:text-white border-transparent rounded-lg bg-rose-100 px-5 py-2'>Accessories</li>
      </ul>
    </div>
  )
}

export default NewArrivals
