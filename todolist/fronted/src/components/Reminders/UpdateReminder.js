import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const UpdateReminder = () => {

  var id = useParams().id;
  console.log("id", id)

  const [data, setdata] = useState('')
  const [reminderName, setreminderName] = useState(data.reminderName)
  const [reminderType, setreminderType] = useState(data.reminderType)


  const getReminder = async () => {
    await axios.get(`http://localhost:4000/reminders/${id}`).then(res => {
      setdata(res.data.data);
      console.log(res.data.data);
    })
  }

  useEffect(() => {
    getReminder()
  }, [])

  const UpdateReminder = (e) => {

    var updatedata = {
      reminderName: reminderName,
      reminderType: reminderType,

    };
    e.preventDefault();

    axios.put(`http://localhost:4000/reminders/${id}`, updatedata).then(res => {
      console.log(updatedata);
      toast("Reminder updated..")
    });
  };

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <form onSubmit={UpdateReminder}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Reminder Name </label>
            <input type="text" className="form-control" defaultValue={data.reminderName} onChange={(e) => setreminderName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Reminder Type</label>
            <input type="text" className="form-control" defaultValue={data.reminderType} onChange={(e) => setreminderType(e.target.value)} />
          </div>
          <button type="submit" onClick={UpdateReminder} className="btn btn-primary">Submit</button>
          <Link to="/dashboard" className="btn btn-light" >Go Back</Link>
          <ToastContainer />
        </form>
      </div>
    </div>
  )
}
