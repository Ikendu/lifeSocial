import { useEffect, useState } from "react";
import cp from "../../assets/persons/cp.webp";
import cover from "../../assets/posts/cover.jpg";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Profile() {
  window.scrollTo(0, 0);

  const [user, setUser] = useState(null);
  const PF = import.meta.env.VITE_ASSERT_ITEMS;

  const { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`/users?username=${username}`);
      console.log(`PROFILE USER`, resp?.data);
      setUser(resp?.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={
                  user?.coverPicture ? PF + /posts/ + user?.coverPicture : cover
                }
                alt="cover picture"
                className="profileCoverImg"
              />
              <img
                src={
                  user?.profilePicture
                    ? PF + /persons/ + user?.profilePicture
                    : cp
                }
                alt="profile picture"
                className="profileUserImg"
              />
            </div>
            <div className="profileUserInfo">
              <h4 className="profileInfoName">{user?.username}</h4>
              <span className="profileInfoDesc">{user?.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={user?.username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
