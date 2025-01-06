import React, { useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdimDashboard from './components/Dashboard/AdimDashboard'
import { useEffect,useState } from 'react'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/localStorage'
const App = () => {
  // setLocalStorage()
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      
    }
  },[])
  


  const handleLogin =(email,password) =>{
    if(email=='admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser' , JSON.stringify({role:'admin'}))
    }else if(userData ){
      const employee= userData.find((e)=>email == e.email && e.password == password)
      if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser' , JSON.stringify({role:'employee',data:employee}))
      }
      
    }
    else{
      alert("Invalid Credentials")
    }
  }
  

  return (
    <>
      {!user ? <Login handleLogin = {handleLogin} /> : ''}
      {user=='admin'?<AdimDashboard changeUser={setUser}/> : (user == 'employee' ?<EmployeeDashboard changeUser={setUser} data = {loggedInUserData}/>:null)}
    </>
  )
}

export default App
