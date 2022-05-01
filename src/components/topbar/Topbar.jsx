import { Chat, Notifications, Person, Search } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import "./topbar.css"
import {Link, useNavigate} from 'react-router-dom'

const Topbar = () => {

  const nevigate = useNavigate()

  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("user")))
  },[])

  const logout = ()=>{
    localStorage.clear();
    nevigate("/login")
    
  }


  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'> 
            <Link to="/" style={{textDecoration : "none"}}> <span className="logo">Samsquare</span> </Link>
        </div>
        <div className="topbarCenter">
        <div className="searchbar">
        <Search className="searchIcon" />
        <input
            placeholder="Search for friend, post or video"
            className="searchInput"
        />
        </div>
        </div>
        <div className="topbarRight">
        <div className="topbarLinks">
          {!user && <Link to="/login" style={{textDecoration:"none", color:"white"}}><span className="topbarLink">login</span></Link>}
          {!user && <Link to="/register" style={{textDecoration:"none", color:"white"}}><span className="topbarLink">signup</span></Link>}
          {user && <Link to="/login" style={{textDecoration:"none", color:"white"}}><span className="topbarLink" onClick={logout}>logout</span></Link>}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src={PF+`${user.profilePicture}`} alt="" className="topbarImg"/>
      </div>
    
    </div>
  )
}

export default Topbar