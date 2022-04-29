import "./register.css";

import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
import { SignUp } from "../../actions/auth";
import { useDispatch } from "react-redux";

const Register = () => {

  const username = useRef("")
  const email = useRef("")
  const password = useRef("")
  const passwordmatch = useRef("")

  const dispatch = useDispatch()

  const handleRegister = (e)=>{
      e.preventDefault()
      const userData = {
        username : username.current.value,
        password : password.current.value,
        email : email.current.value
      }
      dispatch(SignUp(userData))
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
            <input placeholder="Username" ref={username} className="loginInput" />
            <input placeholder="Email" ref={email} className="loginInput" />
            <input placeholder="Password" ref={password} className="loginInput" />
            <input placeholder="Password Again" ref={passwordmatch} className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <Link to="/login" className="loginRegisterButton" style={{textDecoration : "none"}}>Login here</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register