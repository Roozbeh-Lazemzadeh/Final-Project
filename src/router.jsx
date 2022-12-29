import { createBrowserRouter } from "react-router-dom";
import Home from "./component/pages/Home";
import Movies from "./component/pages/Movies";
import Movie from "./component/pages/Movie";
import App from "./App";
import Header from "./component/header/Header";
import SignIn from "./component/form/SignIn";
import Footer from "./component/Footer/Footer";
import UserProvider from "./context/UserContext";
import Profile from "./component/pages/Profile";
import ProfileFavorites from "./component/pages/profile/ProfileFavorites";
import ProfileWatchList from "./component/pages/profile/ProfileWatchList";
import ProfileRatings from "./component/pages/profile/ProfileRatings";

export const router = createBrowserRouter([
  {
    element: (
      <UserProvider>
        <App />
      </UserProvider>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Header />
            <Home />
            <Footer />
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <SignIn />
          </>
        ),
      },
      {
        path: "/:media_type/:movieId",
        element: (
          <>
            <Movie />
          </>
        ),
      },
      {
        path: "/get/:types/:categories/",
        element: <Movies />,
      },
      {
        path: "/profile/Dashboard",
        element: <Profile />,
      },
      {
        path: "/profile/Favorites",
        element: <ProfileFavorites />,
      },
      {
        path: "/profile/WatchList",
        element: <ProfileWatchList />,
      },
      {
        path: "/profile/Ratings",
        element: <ProfileRatings />,
      },
    ],
  },
]);
