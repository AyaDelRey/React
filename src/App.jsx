
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import HomePage from './assets/Pages/HomePage.jsx'
import Navbar from "./assets/ComponentFolder/Navbar.jsx";

function App() {


  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <HomePage/> }  />
            </Routes>
        </Router>
    </>
  )
}

export default App
