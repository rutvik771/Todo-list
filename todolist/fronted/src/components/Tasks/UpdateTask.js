import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const UpdateTask = () => {

  var id = useParams().id;
  console.log("id", id)

  const [data, setdata] = useState('')
  const [taskName, settaskName] = useState(data.taskName)
  const [startingDate, setstartingDate] = useState(data.startingDate)
  const [endingDate, setendingDate] = useState(data.endingDate)
  const [locationName, setlocationName] = useState(data.locationName)
  const [discription, setdiscription] = useState(data.discription)

  const getTask = async () => {
    await axios.get(`http://localhost:4000/tasks/${id}`).then(res => {
      setdata(res.data.data);
      console.log(res.data.data);
    })
  }

  useEffect(() => {
    getTask()
  }, [])

  const updateuser = (e) => {

    var updatedata = {
      taskName: taskName,
      startingDate: startingDate,
      endingDate: endingDate,
      locationName: locationName,
      discription: discription

    };
    e.preventDefault();

    axios.put(`http://localhost:4000/tasks/${id}`, updatedata).then(res => {
      console.log(updatedata);
      toast("User updated..")
    });
  };

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <form onSubmit={updateuser}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Task Name </label>
            <input type="text" className="form-control" defaultValue={data.taskName} onChange={(e) => settaskName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">startinDate </label>
            <input type="text" className="form-control" defaultValue={data.startingDate} onChange={(e) => setstartingDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">EndingDate </label>
            <input type="text" className="form-control" defaultValue={data.endingDate} onChange={(e) => setendingDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Location </label>
            <input type="text" className="form-control" defaultValue={data.locationName} onChange={(e) => setlocationName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Discription</label>
            <input type="text" className="form-control" defaultValue={data.discription} onChange={(e) => setdiscription(e.target.value)} />
          </div>


          <button type="submit" onClick={updateuser} className="btn btn-primary">Submit</button>
          <Link to="/dashboard" className="btn btn-light" >Go Back</Link>
          <ToastContainer />
        </form>
      </div>
    </div>
  )
}
