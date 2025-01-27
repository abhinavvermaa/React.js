import React from 'react'

const Skills = () => {
  return (
    <div className='border-transparent rounded-3xl md:mx-40 m-10 mx-4 p-4 '>
      <h1 className='text-4xl font-bold m-10'>SKILLS</h1>
      <div className='md:flex flex-wrap justify-around'>
        <div >
          <img className='w-20' src=".\assets\skills\html.png" alt="" />
          <h1 className='text-xl font-semibold flex justify-center'>HTML</h1>
        </div>
        <div >
          <img className='w-20' src=".\assets\skills\css.png" alt="" />
          <h1 className='text-xl font-semibold flex justify-center'>CSS</h1>
        </div>
        <div >
          <img className='w-20' src=".\assets\skills\react.png" alt="" />
          <h1 className='text-xl font-semibold flex justify-center'>REACT</h1>
        </div>
        <div >
          <img className='w-20' src=".\assets\skills\node.png" alt="" />
          <h1 className='text-xl font-semibold flex justify-center'>NODEJS</h1>
        </div>
        <div >
          <img className='w-20' src=".\assets\skills\mongodb.png" alt="" />
          <h1 className='text-xl font-semibold flex justify-center'>MONGODB</h1>
        </div>
        <div >
          <img className='w-20' src=".\assets\skills\figma.png" alt="" />
          <h1 className='text-xl font-semibold flex justify-center'>FIGMA</h1>
        </div>
        </div>
    </div>
  )
}

export default Skills
