import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl, apikey } from "../../apiConfig";
import "../../module/movie.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import MovieView from "./MovieView";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const { media_type, movieId } = useParams();
  const { user, session } = useContext(UserContext);

  // get media-type
  let mediaType;
  if (media_type == "movie") {
    mediaType = "movie";
  } else {
    mediaType = "tv";
  }

  async function getMovie() {
    try {
      const movieData = await axios.get(
        `${baseUrl}/${mediaType}/${movieId}?api_key=${apikey}&append_to_response=videos`
      );
      const movieCast = await axios.get(
        `${baseUrl}/${mediaType}/${movieId}/credits?api_key=${apikey}&append_to_response=videos`
      );
      const movieCastFiltered = movieCast.data.cast.filter(
        (item) => item.profile_path != null
      );
      setMovie(movieData.data);
      setCast(movieCastFiltered);
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    getMovie();
  }, [movieId]);

  return (
    <MovieView
      movie={movie}
      mediaType={mediaType}
      session={session}
      user={user}
      cast={cast}
    />
  );
}
