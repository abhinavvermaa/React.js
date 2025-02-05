import React from 'react'
import an from '../assets/code.png'
const Content = () => {
  return (
    <div className='flex  px-17 py-10 '>
      <div className='max-w-[50%]'>
      <h1 className='text-5xl font-bold flex text-gray-200 p-4 '>Code Brew - Your Ultimate Programming Companion </h1>
        <h1 className='text-l font text-200 p-4'>
Code Brew is an innovative platform designed to enhance the coding experience for developers and learners alike. Whether you're a beginner exploring the fundamentals or an experienced programmer refining your skills, Code Brew provides a structured and efficient environment to work with multiple programming languages, including:
s</h1>
        <div className='p-4'>
        <button type="button" class="p-2 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><a href="https://www.w3schools.com/cpp/">c++</a></button>
<button type="button"  class="p-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><a href="https://www.java.com/en/" target='_blank'>Java</a></button>
<button type="button" class=" p-2 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><a href="https://www.java.com/en/" target='_blank'>Rust</a></button>
<button type="button" class=" p-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><a href="https://www.java.com/en/" target='_blank'>Python</a></button>
        </div>
      </div>
      <div className='max-w-[50%] max-h-[40%]  overflow-none'><  img className="border-transparent rounded-2xl" src={an} alt="" /></div>
    </div>
  )
}

export default Content
