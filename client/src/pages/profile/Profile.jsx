import b11 from "../../assets/persons/b11.jpg";
import a6 from "../../assets/posts/a6.jpg";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={a6} alt="cover picture" className="profileCoverImg" />
              <img src={b11} alt="profile picture" className="profileUserImg" />
            </div>
            <div className="profileUserInfo">
              <h4 className="profileInfoName">David Aniede</h4>
              <span className="profileInfoDesc">
                Leadership in view with more life for all round me
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
