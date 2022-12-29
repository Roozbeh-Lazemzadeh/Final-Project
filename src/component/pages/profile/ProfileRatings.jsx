import Footer from "../../Footer/Footer";
import Header from "./Header";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import "../../../module/profile.css";
import LeftSideBarView from "./LeftSideBar/LeftSideBarView";
import CallForRatingsApi from "./RightSideBarForRatings/CallForRatingsApi";

export default function ProfileRatings() {
  const { user, session } = useContext(UserContext);
  const location = window.location.pathname;
  let addActiveClass;
  if (location == "/profile/Ratings") {
    addActiveClass = "Ratings";
  }
  return (
    <>
      <Header />
      <div className="profile__flex__container">
        <LeftSideBarView user={user} addActiveClass={addActiveClass} />
        <CallForRatingsApi user={user} session={session} />
      </div>

      <Footer />
    </>
  );
}
