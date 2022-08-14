import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


export const AddTask = () => {

  const [roleList, setroleList] = useState([])
  const [userList, setuserList] = useState([])
  const [listList, setlistList] = useState([])
  const [taskName, settaskName] = useState('')
  const [startingDate, setstartingDate] = useState('')
  const [endingDate, setendingDate] = useState('')
  const [locationName, setlocationName] = useState('')
  const [discription, setdiscription] = useState('')
  const [role, setrole] = useState('')
  const [user, setuser] = useState('')
  const [list, setlist] = useState('')



  const taskNameChangeHandler = (e) => {
    settaskName(e.target.value)
  }

  const startinDateChangeHandler = (e) => {
    setstartingDate(e.target.value)
  }
  const endingDateChangeHandler = (e) => {
    setendingDate(e.target.value)
  }
  const locationNameChangeHandler = (e) => {
    setlocationName(e.target.value)
  }
  const discriptionChangeHandler = (e) => {
    setdiscription(e.target.value)
  }

  const roleOnChangeHandler = (e) => {
    setrole(e.target.value)
    console.log("roleId", e.target.value)
  }
  const userOnChangeHandler = (e) => {
    setuser(e.target.value)
    console.log("userId", e.target.value)
  }
  const listOnChangeHandler = (e) => {
    setlist(e.target.value)
    console.log("listId", e.target.value)
  }

  const getRole = () =>{
    axios.get("http://localhost:4000/roles").then(res => {
    setroleList(res.data.data)
    console.log(res.data.data)
  })
  }

  const getUser = () =>{
    axios.get("http://localhost:4000/users").then(res => {
    setuserList(res.data.data)
    console.log(res.data.data)
  })
  }
const getList = () =>{
  axios.get("http://localhost:4000/lists").then(res => {
    setlistList(res.data.data)
    console.log(res.data.data)
  })
}
 
useEffect(() => {
 getRole();
 getUser();
 getList();   
}, [])


  const submit = (e) => {
    e.preventDefault();

    var data = {
      taskName: taskName,
      startingDate: startingDate,
      endingDate: endingDate,
      locationName: locationName,
      discription: discription,
      role: role,
      user: user,
      list: list
    }

    axios.post('http://localhost:4000/tasks', data).then(res => {
      console.log(res.data)
      toast("Task added..")
    })
  }
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Task name</label>
            <input type="text" className="form-control" onChange={(e) => { taskNameChangeHandler(e) }} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">startinDate</label>
            <input type="text" className="form-control" onChange={(e) => { startinDateChangeHandler(e) }} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">EndingDate</label>
            <input type="text" className="form-control" onChange={(e) => { endingDateChangeHandler(e) }} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Location</label>
            <input type="text" className="form-control" onChange={(e) => { locationNameChangeHandler(e) }} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Discription</label>
            <input type="text" className="form-control" onChange={(e) => { discriptionChangeHandler(e) }} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Role</label>
            <select className="form-control" onChange={(e) => { roleOnChangeHandler(e) }} >
              <option value="select">select--</option>
              {
                roleList.map((role) => {
                  return (
                    <option value={role._id}>{role.roleName}</option>
                  );
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <select className='form-control' onChange={(e) => { userOnChangeHandler(e) }}>
              <option value="select">select--</option>
              {
                userList.map((user) => {
                  return (
                    <option value={user._id}>
                      {user.name}
                    </option>
                  );
                })

              }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">List Name</label>
            <select className='form-control' onChange={(e) => { listOnChangeHandler(e) }}>
              <option value="select">select--</option>
              {
                listList.map((list) => {
                  return (
                    <option value={list._id}>{list.listName}</option>
                  );
                })
              }
            </select>
          </div>
          <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
          <Link to="/dashboard" className='btn btn-light'>Go Back</Link>
          <ToastContainer />
        </form>
      </div>
    </div>
  )
}
