import './App.css';
import "../node_modules/bootstrap-4-required/src/css/bootstrap.css"
import "../node_modules/bootstrap-4-required/dist/bundle.js"
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Admin_Dashboard/Login';
import { Dashboard } from './components/Admin_Dashboard/Dashboard';
import { Registration } from './components/Admin_Dashboard/Registration';
import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader"
import FadeLoader from "react-spinners/FadeLoader"
import { useState, useEffect } from 'react';
import { Loader } from './Loader';
import { Navbar1 } from './components/UI/Navbar1';
import { Dashboard1 } from './components/UI/Dashboard1';
import { Footer1 } from './components/UI/Footer1';
import { Todolist } from './components/UI/Todolist';
import { TaskForm } from './components/UI/TaskForm';
import { Features } from './components/UI/Features';
import { Details } from './components/UI/Details';
import { Contain } from './components/UI/Contain';
import { Registration1 } from './components/Navbarcontain/Registration1';
import { Login1 } from './components/Navbarcontain/Login1';


function App() {

  const [isLoading, setisLoading] = useState(false)
  

  useEffect(() => {
    
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
    }, 2500);
    return () => {
      
    }
  }, [])

  
  return (

    
    <div >
      {
      isLoading? <Loader/> :
    
  <>  
 
  
  <Routes>
        
       <Route path='/*' element={<Dashboard1/>}></Route>
     
        <Route path='/dashboard/*' element={<Dashboard/>}></Route>
     
        </Routes>
      
     
     
   </>
      }
    </div>

      

  );
}

export default App;
