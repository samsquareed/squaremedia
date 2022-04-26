import "./post.css"
import { MoreVert } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";

const Post = ({post}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    // console.log(post);
    const [user, setUser] = useState({})
    
    useEffect(()=>{
        const fetchedPosts = async () =>{
         const res = await axios.get(`http://localhost:5000/api/users/${post.userId}`)
         setUser(res.data)
        }
        fetchedPosts()
      },[post.userId])

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={PF+user.profilePicture || PF+"person/noAvatar.png"} alt="" />
                    <span className="postUsername"> {user.username} </span>
                    <span className="postDate"> {format(post.createdAt)} </span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
            <span className="postText"> {post?.desc} </span>
          <img className="postImg" src={PF+post?.img} alt="" />
            </div>
            <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src={PF+"like.png"} alt="" />
                <img className="likeIcon" src={PF+"heart.png"} alt="" />
                <span className="postLikeCounter">{post?.likes.length    } people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText"> 1M comments</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Post