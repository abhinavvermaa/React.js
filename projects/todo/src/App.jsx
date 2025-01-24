
import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import List from './components/List'

function App() {
  const [listtodo, setlisttodo] = useState([])
  const addList = (inputtxt) =>{
    setlisttodo([...listtodo,inputtxt])
  }
  const deleteListItem = (key)=>{
    let newListTodo=[...listtodo];
    newListTodo.splice(key,1)
    setlisttodo([...newListTodo])
  }
  return (
    <>
      <Input addList={addList}/>
      {listtodo.map((listItem,i)=>{
        return(
         <li className='p-1.5 '><List key={i} index={i} item={listItem} deleteItem={deleteListItem}/></li> )
      })}
    </>
  )
}

export default App
