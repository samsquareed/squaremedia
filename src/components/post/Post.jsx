import "./post.css"
import { MoreVert } from "@material-ui/icons";

const Post = ({desc, img, likes}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={PF+"person/1.jpeg"} alt="" />
                    <span className="postUsername">Sammed</span>
                    <span className="postDate">9 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
            <span className="postText"> {desc} </span>
          <img className="postImg" src={PF+img} alt="" />
            </div>
            <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src={PF+"like.png"} alt="" />
                <img className="likeIcon" src={PF+"heart.png"} alt="" />
                <span className="postLikeCounter">{likes} people like it</span>
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