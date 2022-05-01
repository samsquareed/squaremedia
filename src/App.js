
import React, { useEffect, useState } from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect (()=>{
    setUser(JSON.parse(localStorage.getItem("user")))
  },[])

  return (
    <Router>
      <Routes>
        {user && <Route exact path="/" element= {<Home />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App