import gift from "../../assets/gift.png";
import a3 from "../../assets/posts/a3.jpg";
import h from "../../assets/persons/h.jpg";
import a from "../../assets/persons/a.jpg";
import e from "../../assets/persons/e.jpg";
import c1 from "../../assets/persons/c1.jpg";
import d from "../../assets/persons/d.jpg";
import f from "../../assets/persons/f.jpg";

import "./rightbar.css";
import { Users } from "../../dumData";
console.log(Users);

function Rightbar({ user }) {
  const HomeRightBar = () => {
    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src={gift} alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Lola Ama</b> and <b>3 other friends</b> have birthday today
            </span>
          </div>
          <img src={a3} alt="rightbar Ad" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((user) => (
              <li key={user.id} className="righbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img
                    src={user?.profilePicture}
                    alt="online friend image"
                    className="rightbarProfileImg"
                  />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">{user?.username}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  const ProfileRightBar = () => {
    return (
      <div className="rightbar">
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightbarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user?.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user?.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user?.relationship == 1
                ? `Single`
                : user?.relationship == 2
                ? `Maried`
                : `Complicated`}
            </span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowers">
          <div className="rightbarFollowing">
            <img src={h} alt="user follower" className="rightbarFollowerImg" />
            <span className="rightbarFollowerName">Gife Onyii</span>
          </div>
          <div className="rightbarFollowing">
            <img src={a} alt="user follower" className="rightbarFollowerImg" />
            <span className="rightbarFollowerName">Ebuka Aba</span>
          </div>
          <div className="rightbarFollowing">
            <img src={e} alt="user follower" className="rightbarFollowerImg" />
            <span className="rightbarFollowerName">Abba Micha</span>
          </div>
          <div className="rightbarFollowing">
            <img src={f} alt="user follower" className="rightbarFollowerImg" />
            <span className="rightbarFollowerName">Akuoma Excel</span>
          </div>
          <div className="rightbarFollowing">
            <img src={d} alt="user follower" className="rightbarFollowerImg" />
            <span className="rightbarFollowerName">Mummy Ella</span>
          </div>
          <div className="rightbarFollowing">
            <img src={c1} alt="user follower" className="rightbarFollowerImg" />
            <span className="rightbarFollowerName">Uba Wealth</span>
          </div>
        </div>
        <div>
          <p className="profileAd">How about this</p>
          <img src={a3} alt="rightbar Ad" className="rightbarAd" />
        </div>
      </div>
    );
  };
  return <>{user ? <ProfileRightBar /> : <HomeRightBar />}</>;
}
export default Rightbar;
