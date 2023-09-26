
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import About from './Components/About';
import Alert from './Components/Alert';
import Features from './Components/Features';
import Clickme from './Clickme';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";



function App() {


  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleStyle = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark mode enabled", "success")

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode enabled", "success")
    }
  }

  return (

    <>
      <BrowserRouter>
       
        <Navbar title="Textutils" about="About Us" mode={mode} style={toggleStyle} />
        {/* <Navbar />  */}
       

        <Alert alert={alert} />

        <div className='container'>
          <Routes>

            <Route path="/" element={<TextForm heading="Enter your Text" showAlert={showAlert} />}   />
            <Route exact path="/about" element={<About />}  />
            <Route exact path='/Features' element={<Features/>}/>
            <Route exact path='/clickme' element={<Clickme/>}/>
              
           
          </Routes>
        </div>
      </BrowserRouter>
      
    </>

  );
}

export default App;
