import axios from "axios";
import "../../../module/movie.css";
import { baseUrl, apikey, posterImg } from "../../../apiConfig";
import { useState, useEffect } from "react";
import AddToFavoriteView from "./AddToFavoriteView";

export default function AddToFavorite({ session, user, mediaType, movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteMovie, setFavoriteMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  async function getUserInfo() {
    const { data } = await axios.get(
      `${baseUrl}/account?api_key=${apikey}&session_id=${session}`
    );
    getFavoriteMovie(data.id);
  }

  useEffect(() => {
    getUserInfo();
  }, [session]);

  //useEffect for favoriteMovie
  useEffect(() => {
    if (movie && favoriteMovie) {
      const checkFavorite = favoriteMovie.find((item) => item.id === movie.id);
      setIsFavorite(Boolean(checkFavorite));
    }
  }, [movie, favoriteMovie]);
  return (
    <AddToFavoriteView
      isFavorite={isFavorite}
      session={session}
      user={user}
      movie={movie}
      getFavoriteMovie={getFavoriteMovie}
      mediaType={mediaType}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
    />
  );
}
