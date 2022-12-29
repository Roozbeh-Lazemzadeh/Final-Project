import React from "react";
import "../../../module/movie.css";
import { baseUrl, apikey, posterImg } from "../../../apiConfig";

export default function PosterImg({ movie }) {
  return (
    <div
      className="container"
      style={{
        background: `url(${posterImg(movie.backdrop_path, "original")})`,
      }}
    ></div>
  );
}
