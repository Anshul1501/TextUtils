import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   Routes
 } from "react-router-dom";
 

function App(){
   
    //Dark Mode 
   const toggleMode = () => {
     if(mode === "light"){
        setMode('dark')
        setModeText('Enable Light Mode');
        showAlert("success", "Dark Mode is Enabled");
        document.body.style.backgroundColor = '#161618';
        document.body.style.color = "white";
     }
     else {
        setMode('light');
        setModeText('Enable Dark Mode');
        showAlert("success", "Light Mode is Enabled");
        document.body.style.backgroundColor = 'white'
        document.body.style.color = "black"
     }
   }
  
      //pass alert state as object
      const[alert, setAlert] = useState({msg:" ", type:" "});

   //Alert Message as an object
    const showAlert = (type, message) => {
    setAlert({
            msg: message,
            type: type
    });
   }

   //Auto Dismiss Alert message 

   setTimeout (() => {
    setAlert(null);
   },3000)

   const[mode, setMode] = useState('light');
   const[modeText, setModeText] = useState('Enable Dark Mode');
   

    return (
        <> 

          <Router>
             <Alert showAlert={showAlert} alert={alert}/>
             <Navbar mode={mode} toggleMode={toggleMode} modeText={modeText} />
             <Routes>
                <Route path='/About' element={<About/>}/>
                <Route path='/' element={<TextForm mode={mode} showAlert={showAlert} alert={alert}/>}/>
             </Routes>
          </Router>
   
     </>
    );
}

export default App;