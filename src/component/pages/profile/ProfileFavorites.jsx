import Header from "./Header";
import LeftSideBarView from "./LeftSideBar/LeftSideBarView";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import Footer from "../../Footer/Footer";
import CallForFavoriteApi from "./RightSideBarForFavorites/CallForFavoriteApi";
import "../../../module/profile.css";

export default function ProfileFavorites() {
  const { user, session } = useContext(UserContext);
  const location = window.location.pathname;
  let addActiveClass;
  if (location == "/profile/Favorites") {
    addActiveClass = "Favorites";
  }

  return (
    <>
      <Header />

      <div className="profile__flex__container">
        <LeftSideBarView user={user} addActiveClass={addActiveClass} />
        <CallForFavoriteApi user={user} session={session} />
      </div>

      <Footer />
    </>
  );
}
