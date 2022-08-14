import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


export const AddReminder = () => {
  const [roleList, setroleList] = useState([])
  const [userList, setuserList] = useState([])
  const [listList, setlistList] = useState([])
  const [taskList, settaskList] = useState([])
  const [reminderName, setreminderName] = useState('')
  const [reminderType, setreminderType] = useState('')
  const [role, setrole] = useState('')
  const [user, setuser] = useState('')
  const [list, setlist] = useState('')

 

  const reminderNameChangeHandler = (e) => {
    setreminderName(e.target.value)
    console.log("reminderName",e.target.value)
  }

  const reminderTypeChangeHandler = (e) => {
    setreminderType(e.target.value)
  }

  const roleOnChangeHandler = (e) => {
    setrole(e.target.value)
  }
  const userOnChangeHandler = (e) => {
    setuser(e.target.value)
  }
  const listOnChangeHandler = (e) => {
    setlist(e.target.value)
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

const getTask = () =>{
  axios.get("http://localhost:4000/tasks").then(res => {
    settaskList(res.data.data)
    console.log(res.data.data)
  })
}
 
useEffect(() => {
 getRole();
 getUser();
 getList();
 getTask();   
}, [])


 

  const submit = (e) => {
    e.preventDefault();

    var data = {
      reminderName: reminderName,
      reminderType: reminderType,
      role: role,
      user: user,
      list: list,
    }

    axios.post('http://localhost:4000/reminders', data).then(res => {
      console.log(res.data)
      toast("Reminder added..")
    })
  }
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Reminder name</label>
            <select className="form-control" onChange={(e) => { reminderNameChangeHandler(e) }}>
              <option value="select">select--</option>
              {
                taskList.map((task) => {
                  return (
                    <option value={task._id}>{task.taskName}</option>
                  );
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Reminder Type</label>
            <select className="form-control" onChange={(e) => { reminderTypeChangeHandler(e) }}>
              <option value="select">select--</option>
              <option value="important">important</option>
              <option value="Normal">Normal</option>
            </select>
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
