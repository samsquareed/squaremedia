import axios from "axios"
import { useEffect, useState } from "react"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./profile.css"
import { useParams } from "react-router"

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const params = useParams();
  // console.log(params);
  // const photo = "post/3.jpeg"

  const [user, setUser] = useState({})
    
  useEffect(()=>{
      const fetchedPosts = async () =>{
        // const res = await axios.get(`http://localhost:5000/api/users?username=${params.username}`)
        // console.log(res);
        setUser(JSON.parse(localStorage.getItem("user")));
      }
      fetchedPosts()
  },[])



  return (
    <>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img
                    className="profileCoverImg"
                    src={user.coverPicture ? PF+`${user.coverPicture}` : PF+"/person/noCover.png"}
                    alt=""
                />
                <img
                    className="profileUserImg"
                    src={user.profilePicture ? PF+`${user.profilePicture}` : PF+"/person/noAvatar.png" }
                    alt=""
                />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName"> {user.username} </h4>
                    <span className="profileInfoDesc"> {user.desc} </span>
                </div>
            </div>
          <div className="profileRightBottom">
            <Feed username={params.username} />
            <Rightbar user={user}/>
          </div>
        </div>
        </div>
    </>
  )
}

export default Profile