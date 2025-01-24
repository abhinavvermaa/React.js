
import { useState } from 'react'
import './App.css'
import Inputs from './components/Inputs'
import List from './components/List'
function App() {
  // const [Expense, setExpense] = useState([])
  // const [Amount, setAmount] = useState([])
  // const [Date, setDate] = useState([])
  // const addExpense =(inputtxt) =>{
  //   setExpense([...Expense,inputtxt])
  // }
  // const addAmount = (inputtxt) =>{
  //   setAmount([...Amount,inputtxt])
  // }
  // const addDate = (inputtxt) =>{
  //   setDate([...Date,inputtxt])
  // }

  const [entry, setEntry] = useState([])

  const addEntry = (expense,amount,date) => {
    setEntry([...entry,{expense,amount,date}])
  }

  const deleteExpense = (key) =>{
    let newList = [...entry];
    newList.splice(key,1)
    setEntry(newList)
  }
  return (
    <>
    <Inputs  addentry={addEntry} />
    {/* {Expense.map((setInput,i)=>{
      return (<List key={i} item={setInput}/>)
    })}
    {Amount.map((setInput,i)=>{
      return (<List key={i} itemA={setInput}/>)
    })}
    {Date.map((setInput,i)=>{
      return (<List key={i} itemB={setInput}/>)
    })} */}
    {entry.map((entry,i)=>{
      return (<List key={i} index={i} expense={entry.expense} amount={entry.amount} date={entry.date} delete={deleteExpense} />)
    })}
    </>
  )
}

export default App
