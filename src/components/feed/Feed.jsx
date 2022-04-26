import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import { useEffect, useState } from "react"
import axios from "axios"

const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchedPosts = async () =>{
      const response = await axios.get("http://localhost:5000/api/posts/timeline/all/62678580c44de845dbcf3f62");
      setPosts(response.data)
    }
    fetchedPosts()
  },[])

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