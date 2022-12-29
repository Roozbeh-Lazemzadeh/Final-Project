import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl, apikey } from "../../../../apiConfig";
import RatingsView from "./RatingsView";
import { Space, Spin } from "antd";

export default function CallForRatingsApi({ session, user }) {
  const [Ratings, setRatings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //favorite Movie & TV
  async function getRatingsList(id) {
    const callRatingsMovie = await axios.get(`
     ${baseUrl}/account/${id}/rated/movies?api_key=${apikey}&session_id=${session}`);
    const callRatingsTV = await axios.get(`
     ${baseUrl}/account/${id}/rated/tv?api_key=${apikey}&session_id=${session}`);
    setRatings([
      ...callRatingsMovie.data.results,
      ...callRatingsTV.data.results,
    ]);
    setIsLoading(false);
  }
  console.log(Ratings);

  useEffect(() => {
    getRatingsList(user && user.id);
  }, [session]);

  return (
    <>
      {!isLoading ? (
        <div
          className={`profile__right__side__section${
            Ratings.length != 0 ? " active" : ""
          }`}
        >
          <RatingsView Ratings={Ratings} />
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
