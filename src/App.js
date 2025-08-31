import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navebar from './components/Navebar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // 🚫 commented out

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  // function to show alerts
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      showAlert("Dark Mode Enabled", "success");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
    } else {
      showAlert("Light Mode Enabled", "success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navebar
          title="Textutils"
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Routes>
            <Route path="/" element={<Textform heading="Enter the text to analyse" darkMode={darkMode} />} />
            <Route path="/about" element={<About />} />
          </Routes> */}
          <Textform heading="Enter the text to analyse" darkMode={darkMode} />
          {/* <About /> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
