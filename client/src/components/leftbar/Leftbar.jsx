import {
  Bookmark,
  Chat,
  Event,
  GroupRounded,
  HelpOutline,
  RssFeed,
  School,
  VideoCall,
  VideoCallRounded,
  WorkOutline,
} from "@material-ui/icons";

import "./leftbar.css";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <VideoCall />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupRounded />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Leftbar;
