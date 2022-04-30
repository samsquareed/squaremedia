import "./register.css";

import React, { useRef } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { SignUp } from "../../actions/auth";
import { useDispatch } from "react-redux";

const Register = () => {

  const username = useRef("")
  const email = useRef("")
  const password = useRef("")
  // const passwordmatch = useRef("")
  const city = useRef("")
  const from = useRef("")
  const profilepic = useRef("")
  const coverpic = useRef("")


  const dispatch = useDispatch()
  const nevigate = useNavigate()

  const handleRegister = (e)=>{
      e.preventDefault()
      const userData = {
        username : username.current.value,
        password : password.current.value,
        email : email.current.value,
        city : city.current.value,
        from : from.current.value,
        profilePicture : profilepic.current.value,
        coverPicture : coverpic.current.value
      }
      dispatch(SignUp(userData,nevigate))
  }


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">samsquare</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on squaremedia.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleRegister}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" required ref={email} className="loginInput" />
            <input placeholder="Password" required ref={password} className="loginInput" />
            {/* <input placeholder="Password Again" required ref={passwordmatch} className="loginInput" /> */}
            <input placeholder="city" required ref={city} className="loginInput" />
            <input placeholder="from" required ref={from} className="loginInput" />
            <input placeholder="profile picture" required ref={profilepic} className="loginInput" />
            <input placeholder="cover picture" required ref={coverpic} className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <Link to="/login" className="loginRegisterButton" style={{textDecoration : "none"}}>Login here</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register