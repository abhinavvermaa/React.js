import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

// let counter= 5;

const addValue = () => {
  
  setCounter(prevcounter => prevcounter + 1)
  setCounter(prevcounter => prevcounter + 1)// this function will give you previous counter data and increments it saperately
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)//they all will work in a batch and return only single execute due to fibre

} 
const removeValue = () => {
  if(counter>=1){

    setCounter(counter-1)
  }
}
  return (
    <>
      <h1>chai aur react</h1>
      <h3>counter valuer : {counter}</h3>

      <button
      onClick = {addValue}
      >Add value {counter}</button>
      <br />
      <br />
      <button
      onClick = {removeValue}>Remove value {counter}</button>
      <p>counter : {counter}</p>
    </>
  )
}

export default App
