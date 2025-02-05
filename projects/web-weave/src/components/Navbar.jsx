import React from 'react'
import cb from'../assets/cb.jpg'
const Navbar = () => {
  return (
    <>
      <div className='h-14 flex  items-center px-17 py-10  justify-between'>
        <div className='flex text-5xl text-slate-300 items-center font-bold px-5 '>
          <img className="max-h-18 border-transparent rounded-xl p-2" src={cb} alt="" />CodeBrew
        </div>
        <ul className=' md:flex  flex-wrap font-semibold text-slate-300  hidden'>
          <li className='text-2xl px-[30px]'><a href="#abouts">C++</a></li>
          <li className='text-2xl px-[30px]'><a href="#Experience">Java</a></li>
          <li className='text-2xl px-[30px]'><a href="#projects">Rust</a></li>
          <li className='text-2xl px-[30px]'><a href="#projects">Python</a></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar
