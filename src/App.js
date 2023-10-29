import './App.css';
import React, { Fragment, useState } from 'react'

import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  // code to alert a message 

  //a state jo alert leta aur set karta hai 
  const [alert, setAlert] = useState(null);

  //Function jo type aur message argument leta hai and from that we change the state of alert 
  let showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })

    //It means 1400ms ke baad alert null ho jayega
    setTimeout(() => {
      setAlert(null)
    }, 1400);
  }

  //code to change into dark mode
  const [mode, setMode] = useState('light');      //using destructuring concept, take state

  const toggleMode = () => {    //make function 
    if (mode === 'light') {   //agar mode light ho to 
      setMode('dark');
      document.body.style.backgroundColor = '#3e3e3e'
      showAlert('success', 'Enter Dark Mode')
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('success', 'Enters light mode')
    }
  }


  //Theme changer 
  const removeClass = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
  }
  const toggleTheme = (colorCls) => {
    removeClass()
    document.body.classList.add('bg-' + colorCls)
  }



  return (
    <>

      <Router>
        {/* Navbar */}
        <Navbar title='MyApp' mode={mode} toggleStyle={toggleMode} toggleTheme={toggleTheme} />

        {/* Alert */}
        <Alert alert={alert} />

        {/* Textform */}
        <div className="container">
          <Routes>

            <Route exact path="/" element={[<TextForm heading="Enter text to analyze" mode={mode} showsAlert={showAlert} />]} />

            <Route exact path="textAnalyzer" element={[<TextForm heading="Enter text to analyze" mode={mode} showsAlert={showAlert} />]} />

            <Route exact path="/about" element={[<About />]} />

          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
