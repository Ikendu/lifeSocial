import gift from "../../assets/gift.png";
import a3 from "../../assets/posts/a3.jpg";
import h from "../../assets/persons/h.jpg";

import "./rightbar.css";
import { Users } from "../../dumData";
console.log(Users);

function Rightbar({ profile }) {
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
    return <>Profile Right Bar</>;
  };
  return <>{profile ? <ProfileRightBar /> : <HomeRightBar />}</>;
}
export default Rightbar;
