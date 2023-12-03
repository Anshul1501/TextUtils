import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

   const toggleMode = () => {
     if(mode == 'light'){
        setMode('dark')
        setModeText('Enable Light Mode');
        document.body.style.backgroundColor = '#161618'
        document.body.style.color = "white"
     }
     else {
        setMode('light');
        setModeText('Enable Dark Mode');
        document.body.style.backgroundColor = 'white'
        document.body.style.color = "black"
     }
   }
   const[mode, setMode] = useState('light');
   const[modeText, setModeText] = useState('Enable Dark Mode');

    return (
        <> 

     <Navbar mode={mode} toggleMode={toggleMode} modeText={modeText} />
     <TextForm mode={mode} />
     <Alert/>

     </>
    );
}

export default App;