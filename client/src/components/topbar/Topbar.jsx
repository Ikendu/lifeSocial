import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import "./topbar.css";
import defaultImg from "../../assets/persons/a.jpg";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logo"></div>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon />
          <input
            placeholder="search for friends or posts"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarlinks">Home</span>
          <span className="topbarlinks">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div>
          <img src={defaultImg} alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  );
}
export default Topbar;
