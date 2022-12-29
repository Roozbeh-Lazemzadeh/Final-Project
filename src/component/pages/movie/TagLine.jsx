import React from "react";
import "../../../module/movie.css";

export default function TagLine({ movie }) {
  return <div className="tagline">{movie && movie.tagline}</div>;
}
