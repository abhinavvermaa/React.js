import { useState } from "react"

const Inputs = (props) =>{
  const [input, setinput] = useState('')
  const [Amount, setAmount] = useState(0)
  const [Date , setDate] = useState('')
  return (
    <>
    <div className="inputs bg-gray-200">
      <h1 className="text-xl">Expense Manager:</h1>
      <input value = {input} onChange={e=>{
        setinput(e.target.value)
      }} type="text" placeholder="Expense Name" className="border rounded focus:ring-blue-500 m-5 p-2" />
      <input value = {Amount}  onChange={e=>{
        setAmount(e.target.value)
      }} type="number" placeholder="Amount"
      className="border rounded focus:ring-blue-500 m-5 p-2" />
      <input value = {Date} onChange={e=>{
        setDate(e.target.value)
      }} type="date" className="border rounded focus:ring-blue-500 m-5 p-2"  />
      <button onClick={()=>{
        props.addentry(input,Amount,Date)
      }} className="border rounded focus:ring-blue-500 bg-green-200 m-5 p-2">submit</button>
    </div>
    </>
  )
}

export default Inputs