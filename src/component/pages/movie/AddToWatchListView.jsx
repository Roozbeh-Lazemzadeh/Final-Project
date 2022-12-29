import axios from "axios";
import "../../../module/movie.css";
import { baseUrl, apikey } from "../../../apiConfig";
import toast from "react-hot-toast";
import { Tooltip } from "antd";
import { BookOutlined, BookFilled, LoadingOutlined } from "@ant-design/icons";

export default function AddToWatchListView({
  isWatchList,
  session,
  user,
  movie,
  getWatchListMovie,
  mediaType,
  setIsLoading,
  isLoading,
}) {
  const customColors = ["#081c22"];

  // post WatchList movie & TV
  async function handelAddWatchList() {
    if (session) {
      setIsLoading(true);
      const result = await axios.post(
        `${baseUrl}/account/${user.id}/watchlist?api_key=${apikey}&session_id=${session}`,
        {
          media_type: `${mediaType}`,
          media_id: movie.id,
          watchlist: !isWatchList,
        }
      );
      await getWatchListMovie(user.id);
      toast.success(
        `${movie.title || movie.name}${
          isWatchList ? " Removed from watchList" : " Added to watchList"
        }`,
        {
          style: { backgroundColor: "#eec932", color: "#000" },
          position: "center",
        }
      );
    } else {
      toast.error("Please Login", {
        style: { backgroundColor: "#eec932", color: "#000" },
        position: "center",
      });
    }
  }
  return (
    <Tooltip
      placement="bottom"
      title={
        isWatchList ? (
          <span>Remove from your watchlist</span>
        ) : (
          <span>Add to your watchlist</span>
        )
      }
      color={customColors}
    >
      <div className="HeartFieldContainer">
        {!isLoading ? (
          isWatchList ? (
            <BookFilled
              style={{ fontSize: "15px", color: "#fcd535" }}
              onClick={handelAddWatchList}
            />
          ) : (
            <BookOutlined
              style={{ fontSize: "15px", color: "#fff" }}
              onClick={handelAddWatchList}
            />
          )
        ) : (
          <LoadingOutlined
            style={{
              fontSize: 24,
            }}
            spin
          />
        )}
      </div>
    </Tooltip>
  );
}
