import Footer from "../Footer/Footer";
import "../../module/profile.css";
import Header from "./profile/Header";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import LeftSideBarView from "./profile/LeftSideBar/LeftSideBarView";
import DashboardRightSide from "./profile/DashboardRightSide";

export default function Profile() {
  const { user, session } = useContext(UserContext);
  const location = window.location.pathname;
  let addActiveClass;
  if (location == "/profile/Dashboard") {
    addActiveClass = "Dashboard";
  }

  return (
    <>
      <div className="profile_root">
        <Header />
        <div className="profile__flex__container">
          <LeftSideBarView user={user} addActiveClass={addActiveClass} />

          <DashboardRightSide user={user} />
        </div>
        <Footer />
      </div>
    </>
  );
}
