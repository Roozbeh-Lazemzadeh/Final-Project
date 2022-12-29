import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl, apikey } from "../../../../apiConfig";
import WatchListView from "./WatchListView";
import { Space, Spin } from "antd";

export default function CallForWatchListApi({ session, user }) {
  const [WatchList, setWatchList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //favorite Movie & TV
  async function getWatchList(id) {
    const callWatchListMovie = await axios.get(`
     ${baseUrl}/account/${id}/watchlist/movies?api_key=${apikey}&session_id=${session}`);
    const callWatchListTV = await axios.get(`
     ${baseUrl}/account/${id}/watchlist/tv?api_key=${apikey}&session_id=${session}`);
    setWatchList([
      ...callWatchListMovie.data.results,
      ...callWatchListTV.data.results,
    ]);
    setIsLoading(false);
  }
  console.log(WatchList);

  useEffect(() => {
    getWatchList(user && user.id);
  }, [session]);

  return (
    <>
      {!isLoading ? (
        <div
          className={`profile__right__side__section${
            WatchList.length != 0 ? " active" : ""
          }`}
        >
          <WatchListView WatchList={WatchList} />
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
