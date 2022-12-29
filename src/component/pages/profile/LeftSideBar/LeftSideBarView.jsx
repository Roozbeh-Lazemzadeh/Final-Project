import DashboardBtn from "./DashboardBtn";
import FavoritesBtn from "./FavoritesBtn";
import ProfileLogo from "./ProfileLogo";
import RatingsBtn from "./RatingsBtn";
import Username from "./Username";
import WatchListBtn from "./WatchListBtn";
import LogOut from "./LogOut";
import { NavLink } from "react-router-dom";

export default function LeftSideBarView({ user, addActiveClass }) {
  return (
    <div className="LeftSideBar_container">
      <aside className="sidebar">
        <ProfileLogo />
        <Username user={user} />
        <ul className="sidebar__menus">
          <NavLink to={"/profile/Dashboard"}>
            <DashboardBtn addActiveClass={addActiveClass} />
          </NavLink>
          <NavLink to={"/profile/Favorites"}>
            <FavoritesBtn addActiveClass={addActiveClass} />
          </NavLink>
          <NavLink to={"/profile/WatchList"}>
            <WatchListBtn addActiveClass={addActiveClass} />
          </NavLink>
          <NavLink to={"/profile/Ratings"}>
            <RatingsBtn addActiveClass={addActiveClass} />
          </NavLink>
          <LogOut />
        </ul>
      </aside>
    </div>
  );
}
