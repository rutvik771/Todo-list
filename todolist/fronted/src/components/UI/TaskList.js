import axios from 'axios'
import React from 'react'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TaskList = () => {

    
    const [tasktask, settasktask] = useState([])

    const table = {
        background: "#5856d6",
        color: "white",
        
      }

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
        toast.success("Task deleted..")
         getTask();
      })
    }
    return (
        <div className="form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-container">
                            <div className="above-heading"><h1><strong>TASK LIST</strong></h1>
                                <table class="table table-hover" style={table}>
                                    <thead >
                                        <tr>
                                        
                                            <th style={{color:"white"}}><h6>Task Name</h6></th>
                                            <th style={{color:"white"}}><h6>Starting Date</h6></th>
                                            <th style={{color:"white"}}><h6>Ending Date</h6></th>
                                            <th style={{color:"white"}}><h6>Location</h6></th>
                                            <th style={{color:"white"}}><h6>Discription</h6></th>
                                            {/* <th style={{color:"white"}}><h6>Reminder Type</h6></th> */}
                                            {/* <th style={{color:"white"}}><h6>List Name</h6></th> */}
                                            <th style={{color:"white"}}><h6>Action</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                    {
                      tasktask.map((task) =>{
  
                        return(
                    <tr>
                        
                      <td>{task.taskName}</td>
                      <td>{task.startingDate}</td>
                      <td>{task.endingDate}</td>
                      <td>{task.locationName}</td>
                      <td>{task.discription}</td>
                      
                      {/* <td>{task.list.listName}</td> */}
                      <td><button onClick={() =>{deleteTask(task._id)}} className="btn btn-light btn-sm" >DELETE</button>
                       <Link to = {`./updatetask/${task._id}`} className = "btn btn-light btn-sm" >UPDATE</Link>
                       </td>
                       <ToastContainer
                      position="top-center"
                      color="black"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      style={{ color:"red" }} 
                    />
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
    )
}
