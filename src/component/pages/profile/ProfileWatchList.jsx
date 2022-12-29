import Header from "./Header";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import LeftSideBarView from "./LeftSideBar/LeftSideBarView";
import Footer from "../../Footer/Footer";
import CallForWatchListApi from "./RightSideBarForWatchList/CallForWatchListApi";

export default function ProfileWatchList() {
  const { user, session } = useContext(UserContext);
  const location = window.location.pathname;
  let addActiveClass;
  if (location == "/profile/WatchList") {
    addActiveClass = "WatchList";
  }

  return (
    <>
      <Header />
      <div className="profile__flex__container">
        <LeftSideBarView user={user} addActiveClass={addActiveClass} />
        <CallForWatchListApi user={user} session={session} />
      </div>

      <Footer />
    </>
  );
}
