import { useState } from 'react'
import { useCallback , useEffect , useRef } from 'react';
function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [characterAllowed , setCharAllowed] = useState(true);
  const [password , setpassword]  = useState("")
  const [cpybtn , setcpybtn] = useState("copy")
  //useref hook
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*_-+={}[]~`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  },[length,numberAllowed,characterAllowed,setpassword])
  const copypasswordtoclipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
    setcpybtn("copied")
  },[password])
  useEffect(() => {passwordGenerator()},[length , numberAllowed , characterAllowed ,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} ></input>
        <button
        onClick={copypasswordtoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5'>{cpybtn}</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className="flex item-center gap-x-1">
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange = {(e) => {setLength(e.target.value)}} onClick={() => {setcpybtn("copy")}} />
          <label >Length : {length}</label>
        </div>
        <div className="flex items-centere gap-x-1">
          <input type="checkbox" defaultChecked = {numberAllowed} id = "numberInput" onChange = {()=>{
            setNumberAllowed((prev)=>!prev);
          }} onClick={() => {setcpybtn("copy")}} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-centere gap-x-1">
          <input type="checkbox" defaultChecked = {characterAllowed} id = "characterInput" onChange = {()=>{
            setCharAllowed((prev)=>!prev);
          }} onClick={() => {setcpybtn("copy")}} />
          <label htmlFor="characterInput">character</label>
        </div>
      </div>
      </div>  
      </>
  )
}

export default App
