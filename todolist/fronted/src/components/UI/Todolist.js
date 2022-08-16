import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Usercontext } from "../Navbarcontain/Registration1";

import { useState } from "react";
import { UserContext } from "./Dashboard1";


export const Todolist = () => {
  
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  useEffect(() => {
    UserData();
   }, [])

  const style = {
    color: "black",
    backgroundColor: "",
    boxShadow: "0 4px 8px 0 #867FC6, 0 6px 20px 0 #867FC6",
  };

  const li = {
    color: "#322a2a",
    paddingBottom: "15px",
    border:"none"
  };

  const ul = {
    marginRight: "14rem",
    marginLeft: "14rem"
  };


  const listOnChangeHandler = (e) => {
    setTask(e.target.value);
  };
  
  const UserData = () => {
    axios.get("http://localhost:4000/get/task").then((res) => {
      setTasklist(res.data.data);
      
    });
  };

  

  const submit = (e) => {
    e.preventDefault();
    var data = {
      taskName: task,
    };

    axios.post("http://localhost:4000/task", data).then((res) => {
      UserData();
      console.log(res.data.data);
    });
    const firstNameInput = document.getElementById('Enter Task');
    console.log(firstNameInput.value);
    firstNameInput.value = '';
    console.log(firstNameInput.value);
  };

  const deleteTask = (_id) => {

    axios.delete(`http://localhost:4000/delete/task/${_id}`).then(res => {
      UserData();
    })
  }

  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-container">
              <div className="above-heading">
                <h1>TASK</h1>
              </div>
              <form onSubmit={submit}>
                <div className="input-group mb-3" style={style}>
                  <input
                    type="text"
                    name="Enter Task"
                    id="Enter Task"
                    className="form-control"
                    placeholder="Enter Task"
                    aria-label="Enter Task"
                    aria-describedby="basic-addon2"
                    onChange={(e) => {
                      listOnChangeHandler(e);
                    }}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-primary"
                      onClick={submit}
                      type="button"
                      id="button-addon2"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
                <ul className="list-group" style={ul}>
                  <div>
                    {tasklist.map((task) => {
                      return (
                        <li
                          style={li}
                          className="list-group-item"
                          value={task._id}
                        >
                          {task.taskName} <div className="float-right"><button onClick={() => { deleteTask(task._id) }} className="btn btn-outline-danger btn-sm" >Delete</button></div>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
