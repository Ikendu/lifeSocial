import { MoreVert } from "@material-ui/icons";
import { useEffect, useState } from "react";
import "./post.css";
// import cp from "../../../assets/persons/cp.webp";
import cp from "../../../assets/persons/cp.webp";
import love from "../../../assets/love.jpg";
import like from "../../../assets/like.jpg";
import { Users } from "../../../dumData";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const PF = import.meta.env.VITE_ASSERT_ITEMS;
// console.log(`pf`, PF);

function Post({ post }) {
  const [isLiked, setIsliked] = useState(false);
  const [likes, setLikes] = useState(post?.likes?.length);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // console.log(`UserId`, post?.userId);
      const resp = await axios.get(`/users/${post?.userId}`);
      // console.log(resp.data);
      setUser(resp?.data);
    };
    fetchData();
  }, []);

  const handleLikeButton = () => {
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    setIsliked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="topLeft">
            <Link to={`profile/${user?.username}`}>
              <img
                src={
                  // Users.filter((user) => user.id === post.userId)?.[0]
                  //   ?.profilePicture
                  user?.profilePicture
                    ? PF + `/persons/` + user?.profilePicture
                    : cp
                }
                alt=""
                className="postProfileImg"
              />
            </Link>

            <span className="postUserName">
              {/* {Users.filter((user) => user.id === post.userId)[0]?.username} */}
              {user?.username}
            </span>
            <span className="postDate">{format(post?.createdAt)}</span>
          </div>
          <div className="topRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCenterText">{post?.desc}</span>
          <img
            src={PF + post?.img}
            alt="post image"
            className="postCenterImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLetf">
            <img
              src={love}
              onClick={handleLikeButton}
              alt="love icon"
              className="likeIcon"
            />
            <img
              src={like}
              onClick={handleLikeButton}
              alt="like icon"
              className="likeIcon"
            />
            <span className="postLikeCounter">
              {likes} {likes < 2 ? `person` : `persons`} like this
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postComentText">{post?.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
