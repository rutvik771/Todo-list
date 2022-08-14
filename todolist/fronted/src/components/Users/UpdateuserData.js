import React from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const UpdateuserData = () => {


  var id = useParams().id;
  console.log("id", id)

  const [data, setdata] = useState('')
  const [name, setname] = useState(data.name)
  const [email, setemail] = useState(data.email)
  const [gender, setgender] = useState(data.gender)
  const [dateofbirth, setdateofbirth] = useState(data.dateofbirth)

  const getuser = async () => {
    await axios.get(`http://localhost:4000/users/${id}`).then(res => {
      setdata(res.data.data);
      console.log(res.data.data);
    })
  }

  useEffect(() => {
    // getuser()
  }, [dateofbirth])

  const updateuser = (e) => {

    var updatedata = {
      name: name,
      email: email,
      gender: gender,
      dateofbirth: dateofbirth,
    };
    e.preventDefault();

    axios.put(`http://localhost:4000/users/${id}`, updatedata).then(res => {
      console.log(updatedata);
      toast("User updated..")
    });
  };

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <form onSubmit={updateuser}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name </label>
            <input type="text" className="form-control" defaultValue={data.name} onChange={(e) => setname(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email </label>
            <input type="email" className="form-control" defaultValue={data.email} onChange={(e) => setemail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Gender </label>
            <input type="text" className="form-control" defaultValue={data.gender} onChange={(e) => setgender(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Date of Birth </label>
            <input type="text" className="form-control" defaultValue={data.dateofbirth} onChange={(e) => setdateofbirth(e.target.value)} />
          </div>


          <button type="submit" onClick={updateuser} className="btn btn-primary">Submit</button>
          <Link to="/dashboard" className="btn btn-light" >Go Back</Link>
          <ToastContainer />
        </form>
      </div>
    </div>
  )
}
