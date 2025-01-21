import { createContext, useState } from "react";
 
export const ControlContext = createContext(null);

export const ContextProvider=(props)=>{
  const [count, setCount] = useState(54)
  return(
  <ControlContext.Provider value = {{count , setCount}} >
    {props.children}
  </ControlContext.Provider>
  )
}