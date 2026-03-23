import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Success from "./pages/Success";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/success" element={<Success />} /> 
        <Route path="/profile/:id" element={<Profile />} /> 
      </Routes>
    </Router>
  )
}

export default App
