import "./login.css";
import {useDispatch} from 'react-redux'

import {signIn} from '../../actions/auth'
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch()
  const email = useRef("")
  const password = useRef("")
  const nevigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    const user = {email : email.current.value  , password: password.current.value }
    // localStorage.setItem("user", JSON.stringify({username : "sammed", password : "12345"}))
    dispatch(signIn(user, nevigate))
    

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
          <form className="loginBox" onSubmit={handleSubmit}>
            <input placeholder="Email" ref={email} className="loginInput" />
            <input placeholder="Password" ref={password} className="loginInput" />
            <button className="loginButton" type="submit" >Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
