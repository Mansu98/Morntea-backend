import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  MailOutline,
  ChatBubbleOutline,
} from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";

export default function Sidebar() {
  const dispatch = useDispatch();
  const history =useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  useEffect(() => {}, [userInfo]);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/dashboard" className="link" style={{textDecoration:"none"}}>
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/dashboard/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
              Profile
              </li>
            </Link>
            <Link to="/dashboard/posts" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Posts
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
        <div className="md:flex flex-wrap">
    <Link onClick={logoutHandler}
     className="inline-flex text-white bg-green-500 border-0 ml-3
     py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md text-base mt-4 md:mt-0">Log Out
      </Link>
      </div>
          </div>
      </div>
    </div>
  );
}
