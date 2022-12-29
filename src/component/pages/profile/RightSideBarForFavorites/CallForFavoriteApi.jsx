import { useState, useEffect } from "react";
import { baseUrl, apikey } from "../../../../apiConfig";
import axios from "axios";
import FavoriteListView from "./FavoriteListView";
import { Space, Spin } from "antd";

export default function CallForFavoriteApi({ session, user }) {
  const [favoriteMovie, setFavoriteMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //favorite Movie & TV
  async function getFavoriteMovie(id) {
    const callFavoriteMovie = await axios.get(`
     ${baseUrl}/account/${id}/favorite/movies?api_key=${apikey}&session_id=${session}`);
    const callFavoriteTV = await axios.get(`
     ${baseUrl}/account/${id}/favorite/tv?api_key=${apikey}&session_id=${session}`);
    setFavoriteMovie([
      ...callFavoriteMovie.data.results,
      ...callFavoriteTV.data.results,
    ]);
    setIsLoading(false);
  }
  console.log(favoriteMovie);

  useEffect(() => {
    getFavoriteMovie(user && user.id);
  }, [session]);

  return (
    <>
      {!isLoading ? (
        <div
          className={`profile__right__side__section${
            favoriteMovie.length != 0 ? " active" : ""
          }`}
        >
          <FavoriteListView
            favoriteMovie={favoriteMovie}
            isLoading={isLoading}
          />
        </div>
      ) : (
        <div className="loading_in_profile">
          <Space size="large">
            <Spin size="large" />
          </Space>
        </div>
      )}
    </>
  );
}
