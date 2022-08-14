import React from 'react'
import axios from 'axios'
import { useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './Dashboard1'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const TaskForm = () => {
 
  const userData = useContext(UserContext);
  console.log("userData in taskform",userData)


  const [taskName, settaskName] = useState('')
  const [startingDate, setstartingDate] = useState('')
  const [endingDate, setendingDate] = useState('')
  const [locationName, setlocationName] = useState('')
  const [discription, setdiscription] = useState('')
  const [reminder1, setreminder1] = useState(true)
  const [reminder2, setreminder2] = useState(false)

  const li = {
    background: "#5856d6",
    color: "white",
    padding:"35px"
  }
  
  const style1 ={
    color:"white",
  }

  const taskNameChangeHandler = (e) => {
    settaskName(e.target.value)
  }

  const startinDateChangeHandler = (e) => {
    setstartingDate(e.target.value)
  }
  const endingDateChangeHandler = (e) => {
    setendingDate(e.target.value)
  }
  const locationNameChangeHandler = (e) => {
    setlocationName(e.target.value)
  }
  const discriptionChangeHandler = (e) => {
    setdiscription(e.target.value)
  }

  const reminder1OnChangeHandler = (e) =>{
    setreminder1(e.target.checked)
  }
  const reminder2OnChangeHandler = (e) =>{
    setreminder2(e.target.checked)
  }

  const submit = (e) => {
    e.preventDefault();

    var data = {
      taskName: taskName,
      startingDate: startingDate,
      endingDate: endingDate,
      locationName: locationName,
      discription: discription,
      reminder1Type:reminder1,
      reminder2Type:reminder2,
     
    }

    axios.post('http://localhost:4000/tasks', data).then(res => {
      console.log(res.data)
      toast.success("Task added..")
      
    })
   
    
  }

  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-container">
              <div className="above-heading"><h1><strong>TASK</strong></h1></div>
              <h2></h2>
              <form onSubmit={submit} style={li} >
                <div className="form-group"  >
                  <label htmlFor="inputAddress">Task</label>
                  <input type="text" className="form-control" placeholder="Enter your taskname"  onChange={(e) => { taskNameChangeHandler(e) }} />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Starting Date</label>
                    <input type="date" className="form-control" placeholder=""  onChange={(e) => { startinDateChangeHandler(e) }}/>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Ending Date</label>
                    <input type="date" className="form-control" placeholder="" onChange={(e) => { endingDateChangeHandler(e) }} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Location</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="Enter your location name" onChange={(e) => { locationNameChangeHandler(e) }} />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Discription</label>
                  <textarea  type="text" className="form-control" id="inputAddress2" placeholder="Enter the task discription" onChange={(e) => { discriptionChangeHandler(e) }}/>
                </div>
                <fieldset className="form-group">
                  <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Reminder</legend>
                    <div className="col-sm-10" >
                      <div className="form-check">
                        <input className="form-check-input" style={style1} type="radio" name="gridRadios" id="gridRadios1" checked={reminder1} defaultChecked onChange={(e) => { reminder1OnChangeHandler(e) }}/>
                        <label className="form-check-label" htmlFor="gridRadios1" style={style1}>
                          Normal
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" checked={reminder2} onChange={(e) => { reminder2OnChangeHandler(e) }}/>
                        <label className="form-check-label" htmlFor="gridRadios2" style={style1}>
                          Important
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
                
                <button type="submit" className="btn btn-light" onSubmit={submit}>SAVE</button>
                <span style={{paddingLeft:"10px"}}>
                <Link  className="btn btn-light"  to="tasklist" > GET TASKS</Link>
                </span>
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
              </form>


              {/* end of newsletter form */}
            </div> {/* end of text-container */}
          </div> {/* end of col */}
        </div> {/* end of row */}
      </div> {/* end of container */}
    </div>
  )
}
