import axios from "axios";
import RateItView from "./RateItView";
import { useState, useEffect } from "react";
import { baseUrl, apikey } from "../../../apiConfig";
import toast from "react-hot-toast";

export default function RateIt({ movie, mediaType, session, user }) {
  const [ratedMovie, setRatedMovie] = useState([]);
  const [isRated, setIsRated] = useState(false);
  const [rateValue, setRateValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function handelAddRating(rate) {
    if (session) {
      setIsLoading(true);
      const result = await axios.post(
        `${baseUrl}/${mediaType}/${movie.id}/rating?api_key=${apikey}&session_id=${session}`,
        {
          value: rate * 2,
        }
      );
      // await getRatedMovie();
      const temp = await getRatedMovie();
      toast.success(`${movie.title || movie.name}${" has been rated."}`, {
        style: { backgroundColor: "#eec932", color: "#000" },
        position: "center",
      });
      setIsLoading(false);
      setIsRated(true);
    } else {
      toast.error("Please Login", {
        style: { backgroundColor: "#eec932", color: "#000" },
        position: "center",
      });
    }
  }
  async function getRatedMovie() {
    if (user) {
      const fetchRatedMovie = await axios.get(
        `${baseUrl}/account/${user.id}/rated/movies?api_key=${apikey}&session_id=${session}`
      );
      const fetchRatedTV = await axios.get(
        `${baseUrl}/account/${user.id}/rated/tv?api_key=${apikey}&session_id=${session}`
      );
      setRatedMovie([
        ...fetchRatedMovie.data.results,
        ...fetchRatedTV.data.results,
      ]);
    }
  }
  useEffect(() => {
    getRatedMovie();
  }, [apikey, session, user]);

  //useEffect for isRated

  useEffect(() => {
    if (movie && ratedMovie) {
      const checkIfRated = ratedMovie.find((item) => item.id === movie.id);
      setIsRated(Boolean(checkIfRated));
      if (Boolean(checkIfRated)) {
        setRateValue(checkIfRated.rating);
      } else {
        setRateValue(0);
      }
    }
  }, [movie, ratedMovie]);

  return (
    <RateItView
      handelAddRating={handelAddRating}
      isRated={isRated}
      rateValue={rateValue}
      session={session}
      isLoading={isLoading}
      setRateValue={setRateValue}
      movie={movie}
    />
  );
}
