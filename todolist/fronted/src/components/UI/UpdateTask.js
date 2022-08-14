import axios from 'axios'
import React from 'react'
import { useState , useEffect } from 'react'
import { Link , useParams } from 'react-router-dom'
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

  
    const li = {
      background: "#5856d6",
      color: "white",
      padding:"35px"
    }
    
    const style1 ={
      color:"white",
    }

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
          toast.success("User updated..")
        });
      };
  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-container">
              <div className="above-heading"><h1><strong>TASK</strong></h1></div>
              <h2></h2>
              <form  style={li} >
                <div className="form-group"  >
                  <label htmlFor="inputAddress">Task</label>
                  <input type="text" className="form-control" placeholder="Enter your taskname"  defaultValue={data.taskName} onChange={(e) => settaskName(e.target.value)} />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Starting Date</label>
                    <input type="date" className="form-control" placeholder="" defaultValue={data.startingDate} onChange={(e) => setstartingDate(e.target.value)}/>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Ending Date</label>
                    <input type="date" className="form-control" placeholder=""  defaultValue={data.endingDate} onChange={(e) => setendingDate(e.target.value)}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Location</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="Enter your location name" defaultValue={data.locationName} onChange={(e) => setlocationName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Discription</label>
                  <textarea  type="text" className="form-control" id="inputAddress2" placeholder="Enter the task discription" defaultValue={data.discription} onChange={(e) => setdiscription(e.target.value)} />
                </div>
                <fieldset className="form-group">
                  <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Reminder</legend>
                    <div className="col-sm-10" >
                      <div className="form-check">
                        <input className="form-check-input" style={style1} type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                        <label className="form-check-label" htmlFor="gridRadios1" style={style1}>
                          Normal
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="gridRadios2" style={style1}>
                          Important
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
                
                <button type="submit" className="btn btn-light" onClick={updateuser}>SAVE</button>
                <span style={{paddingLeft:"10px"}}>
                <Link  className="btn btn-light"  to="tasklist/updatetask" > BACK</Link>
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
