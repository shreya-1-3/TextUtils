//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
//imported the component
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [word, setWord] = useState("Enable Dark Mode");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2d3337";
      showAlert("Dark Mode has been enabled", "success");
      setWord("Enable Light Mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      setWord("Enable Dark Mode");
    }
  };

  return (
    <>
    <Router>

      <Navbar
        title="Textutils"
        toggleMode={toggleMode}
        aboutText="About Us"
        mode={mode}
        word={word}
      />
      <Alert alert={alert} />
      
        <div className="container my-5">
          <Routes>
            <Route exact path="/about" element={<AboutMe mode={mode} />} />
            <Route
              exact path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Try TextUtils: Enter your text"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
