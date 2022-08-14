import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Addroledata = () => {

  const [roleName, setroleName] = useState('')

  var data = {
    roleName: roleName,
  }

  const rolenameChangeHandler = (e) => {
    setroleName(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/roles', data).then(res => {
      console.log(res.data)
      toast("Rolename added");
    })
  }

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">RoleName</label>
            <input type="text" className="form-control" onChange={(e) => { rolenameChangeHandler(e) }} />
          </div>
          <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
          <ToastContainer />
        </form>
      </div>
    </div>
  )
}
