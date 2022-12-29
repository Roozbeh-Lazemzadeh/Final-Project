import React from "react";
import "../../../module/movie.css";
import { baseUrl, apikey, posterImg } from "../../../apiConfig";

export default function MovieImg({ movie }) {
  return <img src={posterImg(movie.poster_path)} id="poster_img" />;
}
