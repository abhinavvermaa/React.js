import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='h-14 flex  items-center px-17 py-10 bg-gradient-to-r from-slate-600 to-slate-900 justify-between'>
        <div className='text-5xl text-slate-300  font-bold px-5 '>
          Portfolio
        </div>
        <ul className=' md:flex  flex-wrap font-semibold text-slate-300  hidden'>
          <li className='text-2xl px-[30px]'><a href="#abouts">About</a></li>
          <li className='text-2xl px-[30px]'><a href="#Experience">Experience</a></li>
          <li className='text-2xl px-[30px]'><a href="#projects">Projects</a></li>
        </ul>
        <div class="md:hidden">
      <a class="text-4xl" href="#">=</a>
    </div>
      </div>
    </>
  )
}

export default Navbar
