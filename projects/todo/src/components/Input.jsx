import React, { useState } from 'react'

const Input = (props) => {
  const [input, setInput] = useState('')
  const handleEnterPress = (e)=>{
    if(e.keyCode===13){
    props.addList(input)
    setInput("")
    }
  }
  return (
    <div>
      <input value={input} onChange={(e)=>{
        setInput(e.target.value)
      }} onKeyDown={handleEnterPress} className='bg-grey-500 border-blue-900 m-4 outline-2' type="text" />
    <button onClick={() =>{
    props.addList(input)
    setInput("")
  }} className='border-2 rounded-xl bg-grey-50 '>submit</button>
    </div>
  )
}

export default Input
