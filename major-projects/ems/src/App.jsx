import React, { useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdimDashboard from './components/Dashboard/AdimDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useEffect,useState } from 'react'
import { AuthContext } from './context/AuthProvider'
const App = () => {
  setLocalStorage()
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])
  // console.log(user);2:04min
  


  const handleLogin =(email,password) =>{
    if(email=='admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser' , JSON.stringify({role:'admin'}))
    }else if(authData && authData.employees.find((e)=>email == e.email && e.password == password)){
      setUser('employee')
      localStorage.setItem('loggedInUser' , JSON.stringify({role:'employee'}))
      
    }
    else{
      alert("Invalid Credentials")
    }
  }
  

  return (
    <>
      {!user ? <Login handleLogin = {handleLogin} /> : ''}
      {user=='admin'?<AdimDashboard/> : <EmployeeDashboard />}
      {/* <EmployeeDashboard /> */}
      {/* <AdimDashboard /> */}
    </>
  )
}

export default App
