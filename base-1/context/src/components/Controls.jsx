import { useContext } from "react"
import { ControlContext } from "../context/Controls"
function Controls(){
  const counterstate = useContext(ControlContext)
  return (
    <>
    <button onClick={() => {
      counterstate.setCount(counterstate.count+1);
    }}>increment</button>
    <button onClick={() => {
      counterstate.setCount(counterstate.count-2);
    }}>decrement</button>
    </>
  )
}

export default Controls