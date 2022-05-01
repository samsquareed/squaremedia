import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import { useEffect, useState } from "react"
import axios from "axios"

const Feed = ({username}) => {

  const [posts, setPosts] = useState([]);
  // const [user, setUser] = useState({})

  useEffect(()=>{
    const fetchedPosts = async () =>{
      const userid = JSON.parse(localStorage.getItem("user"))._id
      // console.log(userid);
      const response = username ? 
      await axios.get(`http://localhost:5000/api/posts/profile/`+username)
      : await axios.get(`http://localhost:5000/api/posts/timeline/all/${userid}`);
      setPosts(response.data)
    }
    fetchedPosts()
  },[username])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {
          posts.map((p)=>{
            return (
              <Post 
                key={p._id} 
                post={p}  
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Feed