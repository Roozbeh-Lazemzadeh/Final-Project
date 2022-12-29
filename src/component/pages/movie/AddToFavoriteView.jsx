import axios from "axios";
import "../../../module/movie.css";
import { baseUrl, apikey } from "../../../apiConfig";
import toast from "react-hot-toast";
import { Tooltip } from "antd";
import { HeartFilled, HeartOutlined, LoadingOutlined } from "@ant-design/icons";

export default function AddToFavoriteView({
  isFavorite,
  session,
  user,
  movie,
  getFavoriteMovie,
  mediaType,
  setIsLoading,
  isLoading,
}) {
  const customColors = ["#081c22"];

  // post favorite movie & TV
  async function handelAddFavorite() {
    if (session) {
      setIsLoading(true);
      const result = await axios.post(
        `${baseUrl}/account/${user.id}/favorite?api_key=${apikey}&session_id=${session}`,
        {
          media_type: mediaType,
          media_id: movie.id,
          favorite: !isFavorite,
        }
      );
      await getFavoriteMovie(user.id);
      toast.success(
        `${movie.title || movie.name}${
          isFavorite ? " Removed from favorite" : " Added to favorite"
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
        isFavorite ? (
          <span>Remove from your favorite list</span>
        ) : (
          <span>Mark as favorite</span>
        )
      }
      color={customColors}
    >
      <div className="HeartFieldContainer">
        {!isLoading ? (
          isFavorite ? (
            <HeartFilled
              style={{ fontSize: "15px", color: "#fcd535" }}
              onClick={handelAddFavorite}
            />
          ) : (
            <HeartOutlined
              style={{ fontSize: "15px", color: "#fff" }}
              onClick={handelAddFavorite}
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
