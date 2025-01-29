import React from 'react'

const Experience = () => {
  return (
    <div className="md:flex flex-col justify-center border-transparent rounded-3xl md:mx-40 mx-4 p-4 bg-slate-900/60 m-10" id='Experience'>
      <h1 className="text-4xl font-bold text-gray-100 m-5">EXPERIENCE</h1>
      <div className='flex-wrap items-center m-5 max-w-70  p-4 bg-slate-900/60  border-transparent rounded-3xl '>
        <div className='m-8 '><img className="max-h-40" src="./assets/history/A2it.png" alt="" /></div>
        <div className='flex-col'>
          <h1 className='text-xl font-semibold '>Web Design Intern ,
          A2IT online, Mohali </h1>
          <p className="text-xl">May 2024 – July 2024</p>
          <p>Assisted in designing and developing responsive websites using HTML, CSS, JavaScript
          and React</p>
        </div>
      </div>
    </div>
  )
}

export default Experience
