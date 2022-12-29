import { NavLink } from "react-router-dom";
import { posterImg } from "../../../../apiConfig";
import ShowEmptyBox from "../CommonComponents/ShowEmptyBox";

export default function FavoriteListView({ favoriteMovie }) {
  return favoriteMovie.length != 0 ? (
    favoriteMovie.map((item) => (
      <div className="profile__movie__card">
        <NavLink to={`/${item.title ? "movie" : "tv"}/${item.id}`}>
          <img
            src={posterImg(item.poster_path)}
            className="bookmarks__list__item--img"
          />
          <div className="profile__movie__title">{item.title || item.name}</div>
        </NavLink>
      </div>
    ))
  ) : (
    <div className="empty__items">
      <span>You haven't added any favorite movies.</span>
      <ShowEmptyBox />
    </div>
  );
}
