import axios from "axios";
import "../../../module/movie.css";
import { baseUrl, apikey } from "../../../apiConfig";
import { useState, useEffect } from "react";
import AddToWatchListView from "./AddToWatchListView";

export default function AddToWatchList({ session, user, mediaType, movie }) {
  const [isWatchList, setIsWatchList] = useState(false);
  const [watchListMovie, setWatchListMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //get watchList Movies & TV
  async function getWatchListMovie(id) {
    const callWatchListMovie = await axios.get(`
    ${baseUrl}/account/${id}/watchlist/tv?api_key=${apikey}&session_id=${session}`);
    const callWatchListTV = await axios.get(`
    ${baseUrl}/account/${id}/watchlist/movies?api_key=${apikey}&session_id=${session}`);
    setWatchListMovie([
      ...callWatchListMovie.data.results,
      ...callWatchListTV.data.results,
    ]);
    setIsLoading(false);
  }

  async function getUserInfo() {
    const { data } = await axios.get(
      `${baseUrl}/account?api_key=${apikey}&session_id=${session}`
    );
    getWatchListMovie(data.id);
  }

  useEffect(() => {
    getUserInfo();
  }, [session]);

  //useEffect for watchListMovie
  useEffect(() => {
    if ((movie, watchListMovie)) {
      const checkWatchList = watchListMovie.find(
        (item) => item.id === movie.id
      );
      setIsWatchList(Boolean(checkWatchList));
    }
  }, [movie, watchListMovie, isWatchList]);

  return (
    <AddToWatchListView
      isWatchList={isWatchList}
      session={session}
      user={user}
      movie={movie}
      getWatchListMovie={getWatchListMovie}
      mediaType={mediaType}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
    />
  );
}
