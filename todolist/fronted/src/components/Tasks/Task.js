import axios from 'axios'
import React from 'react'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Task = () => {

    const [tasktask, settasktask] = useState([])

    const getTask = () =>{
        axios.get("http://localhost:4000/tasks").then(res =>{
            console.log(res.data.data);
            settasktask(res.data.data);
        })
    }

    useEffect(() => {
      
        getTask();
    
    }, [])
    
    const deleteTask =(_id) =>{

      axios.delete(`http://localhost:4000/tasks/${_id}`).then(res =>{
        toast("Task deleted..")
         getTask();
      })
    }
  return (
    <div className="main-panel">
    <div className="content-wrapper">
      <div className="page-header"> 
        <h6 className="page-title">Task </h6> 
        <Link to = "/dashboard/task/addtask" className='btn btn-primary'>Add Task</Link>
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title"> Table</h4>
              
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>   
                    <tr>
                      {/* <th><h6>Task Id</h6></th> */}
                      <th><h6>Task Name</h6></th>
                      <th><h6>Starting Date</h6></th>
                      <th><h6>Ending Date</h6></th>
                      <th><h6>Location</h6></th>
                      <th><h6>Discription</h6></th>
                      {/* <th><h6>Role</h6></th>
                      <th><h6>User</h6></th>
                      <th><h6>List</h6></th> */}

                      <th><h6>Action</h6></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tasktask.map((task) =>{
  
                        return(
                    <tr>
                      {/* <td>{task._id}</td> */}
                      <td>{task.taskName}</td>
                      <td>{task.startingDate}</td>
                      <td>{task.endingDate}</td>
                      <td>{task.locationName}</td>
                      <td>{task.discription}</td>
                      {/* <td>{task.role.roleName}</td>
                      <td>{task.user.name}</td>
                      <td>{task.list.listName}</td> */}
                      <td><button onClick={() =>{deleteTask(task._id)}} className="btn btn-danger" >DELETE</button>
                       <Link to = {`./updatetask/${task._id}`} className = "btn btn-primary" >UPDATE</Link>
                       </td>
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
