import axios from 'axios'
import React from 'react'
import { useState , useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export const Reminder = () => {

    const [ReminderList, setReminderList] = useState([])

    const getReminder = () =>{
        axios.get("http://localhost:4000/reminders").then(res =>{
            console.log(res.data.data);
            setReminderList(res.data.data);
        })
    }

    useEffect(() => {
      getReminder();
    }, [])
    
    const deleteReminder = (_id) =>{
      axios.delete(`http://localhost:4000/reminders/${_id}`).then(res =>{
        toast("Reminder deleted..")
        getReminder();
      });
    }

  return (
    <div className="main-panel">
    <div className="content-wrapper">
      <div className="page-header">
        <h5 className="page-title"> Reminder </h5> 
        {/* <Link to = "/dashboard/reminder/addreminder" className='btn btn-primary'>Add Reminder</Link> */}
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Table</h4>
              
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>   
                    <tr>
                      <th><h5>Reminder Id</h5></th>
                      <th><h5>Reminder Name</h5></th>
                      <th><h5>Reminder Types</h5></th>
                      <th><h5>Role</h5></th>
                      <th><h5>User</h5></th>
                      <th><h5>List</h5></th>
                      <th><h5>Action</h5></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      ReminderList.map((reminder) =>{
  
                        return(
                    <tr>
                      <td>{reminder._id}</td>
                      <td>{reminder.task}</td>
                      <td>{reminder.reminderType}</td>
                      <td>{reminder.role.roleName}</td>
                      <td>{reminder.user.name}</td>
                      <td>{reminder.list.listName}</td>
                    
                      <td><button onClick={()=>{deleteReminder(reminder._id)}} className="btn btn-danger" >DELETE</button>
                       <Link to = {`./updatereminder/${reminder._id}`} className = "btn btn-primary" >UPDATE</Link></td>
                       <ToastContainer/>
                    </tr>
  
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
