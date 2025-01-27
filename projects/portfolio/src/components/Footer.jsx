import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-950 md:flex flex-wrap  justify-center items-center'>
      <div className='p-5 md:p-20 flex-col justify-center items-center'>
        <h1 className='md:text-7xl text-4xl font-bold'>Contact</h1>
        <p className='text-2xl font-semibold'>Feel free to reach out!</p>
      </div>
      <div className='flex-col p-5 sm:p-10  '>
      <div className=' flex flex-wrap justify-center items-center p-2 '>
        <div >
          <img className="" src="./assets/contact/emailIcon.png" alt="" />
        </div >
          <h2 className=' text-l md:text-xl font-semibold'>Abhinavverma5351@gmail.com</h2>
      </div>
      <div className=' flex flex-wrap justify-center items-center p-2'>
        <div >
          <img className="" src="./assets/contact/githubIcon.png" alt="" />
        </div >
        <a href="https://github.com/abhinavvermaa" target='_blank' className=' text-l md:text-xl font-semibold'>github.com/abhinavvermaa</a>
      </div>
      <div className=' flex flex-wrap justify-center items-center p-2 '>
        <div >
          <img className="" src="./assets/contact/linkedinIcon.png" alt="" />
        </div >
          <a href="https://www.linkedin.com/in/abhinav-verma-v5351/" target='_blank' className=' text-l md:text-xl font-semibold'>linkedin.com/in/abhinav-verma-v5351</a>
      </div>
      </div>
    </div>
  )
}

export default Footer
