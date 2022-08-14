import axios from 'axios'
import React from 'react'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const AddList = () => {

  const [roleList, setroleList] = useState([])
  const [userList, setuserList] = useState([])
  const [listname, setlistname] = useState('')
  const [role, setrole] = useState('')
  const [user, setuser] = useState('')


const getRole = () =>{
  axios.get("http://localhost:4000/roles").then(res => {
    console.log(res.data.data)
    setroleList(res.data.data)
  })

}
const getUser = () =>{

  axios.get("http://localhost:4000/users").then(res => {
    console.log(res.data.data)
    setuserList(res.data.data)
  })

}
 
useEffect(() => {
 getRole();
 getUser();
}, [])


  const ListChangeHandler = (e) => {
    setlistname(e.target.value);
  }
  const roleOnChangeHandler = (e) => {
    setrole(e.target.value);
    console.log("roleId", e.target.value);

  }
  const userOnChangeHandler = (e) => {
    setuser(e.target.value);
    console.log("userId", e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    var data = {
      listName: listname,
      user: user,
      role: role
    }



    axios.post('http://localhost:4000/lists', data).then(res => {
      console.log(res.data)
      toast("List added..")
    })
  }
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">List Name</label>
            <input type="text" className="form-control" onChange={(e) => { ListChangeHandler(e) }} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Role Name</label>
            <select className="form-control" onChange={(e) => { roleOnChangeHandler(e) }}>
              <option value="select" >select--</option>
              {
                roleList.map((role) => {
                  return (
                    <option
                      value={role._id}>
                      {role.roleName}</option>
                  );
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">user Name</label>
            <select className="form-control" onChange={(e) => { userOnChangeHandler(e) }}>
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
          <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
          <Link to="/dashboard" className='btn btn-light'>Go Back</Link>
          <ToastContainer />
        </form>
      </div>
    </div>
  )
}
