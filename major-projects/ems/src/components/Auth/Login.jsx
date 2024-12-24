import React from 'react'
import { useState } from 'react'
const Login = ({handleLogin}) => {
  // console.log(handleLogin)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const submitHandler = (e) => {
    handleLogin(email,password)
    e.preventDefault()

    setemail(email)
    setpassword(password)
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <h1 className='flex justify-center text-3xl mb-7 font-bold text-emerald-400'>LogIn</h1>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-col items-center justify-center' >
          <input 
          value={email}
          onChange={(e)=>{setemail(e.target.value)}}
          required className='outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
          <input 
          value={password}
          onChange={(e)=>{setpassword(e.target.value)}}
          required className='outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-gray-400 mt-3'  type="password" placeholder='Enter your password' />
          <button className='text-white outline-none  border-none bg-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-white mt-5'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
