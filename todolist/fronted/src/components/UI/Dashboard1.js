import React, { createContext }  from 'react'
import { useState, useEffect } from 'react';
import { Routes , Route } from 'react-router-dom'
import { Contain } from './Contain'
import { Details } from './Details'
import { Features } from './Features'
import { Footer1 } from './Footer1'
import { Navbar1 } from './Navbar1'
import { Login1 } from '../Navbarcontain/Login1'
import { Registration1 } from '../Navbarcontain/Registration1'
import { TaskForm } from './TaskForm'
import { Todolist } from './Todolist'
import { TaskList } from './TaskList'
import { UpdateTask } from './UpdateTask'
import axios from 'axios';

export const UserContext = createContext();
export const Dashboard1 = () => {

  

  const [auth, setauth] = useState(false)
  const [roleId, setroleId] = useState(false)
  const [role, setrole] = useState(false)
  const [userId, setuserId] = useState("")
  const [userData, setuserData] = useState([])

  useEffect( async() => {

    let email=localStorage.getItem("email")
    let role=localStorage.getItem("role") 
    let roleId=localStorage.getItem("roleId")
    let userId = localStorage.getItem("userId")



    setrole(role)
    setroleId(roleId)
    setuserId(userId) 

    console.log("Dashboard1.js email:" , email)
    console.log("Dashboard1.js role:" , role)
    console.log("userId in Dashboard1.js:", userId)

    if(email && roleId){
      setauth(true)
    }
    else{
      setauth(false)
    }

  }, [])

  const getUserData = () => {
    axios.get(`http://localhost:4000/users/${userId}`).then(res=>{
      console.log("userlogin",res.data.data )
      setuserData(res.data.data);
    })
  }
  useEffect(() => {
    
    localStorage.setItem("user_auth" , auth)
  
    
  }, [auth])
  
  
  useEffect(() => {
    localStorage.setItem("userId",userId)
    getUserData();
    

    return()=>{
      console.log("returned userId:", userId)
    }
  
  }, [userId])

  const authenticate = (auth,roleId,userId)=>{
    setauth(auth)
    setroleId(roleId)
    setuserId(userId)
  }
  
  console.log("auth",auth)
  console.log("user data", userData)
  
  return (
    <div>
      <UserContext.Provider value={userData} >
        <Navbar1/>
        <Routes>
        <Route path='/*' element={<Contain/>}></Route>
        <Route path='contain' element={<Contain/>}></Route>
        <Route path='todolist' element={<Todolist/>}></Route>
        <Route path='todolist/taskform' element={<TaskForm/>}></Route>
        <Route path='todolist/taskform/tasklist' element={<TaskList/>}></Route>
        <Route path='todolist/taskform/tasklist/updatetask/:id' element={<UpdateTask/>}></Route>
        {/* <Route path='todolist/taskform/tasklist/updatetask/tasklist' element={<TaskList/>}></Route> */}
        <Route path='login1' element={<Login1 authenticate={authenticate}/>}></Route>
        <Route path='login1/registration1' element={<Registration1/>}></Route>
        <Route path='registration1' element={<Registration1/>}></Route>
        <Route path='features' element={<Features/>}></Route>
        <Route path='details' element={<Details/>}></Route>
     
        </Routes>
        <Footer1/>
        </UserContext.Provider>
    </div>
  )
}
