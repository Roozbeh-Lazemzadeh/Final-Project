import React from "react";
import "../../../module/movie.css";

export default function MovieTitle({ mediaType, movie }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h2
        style={{
          margin: "0",
          color: "white",
          fontSize: "1.9rem",
          fontWeight: 700,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {mediaType == "movie"
          ? movie.title.slice(0, 50)
          : movie.name.slice(0, 50)}
      </h2>
      <h2
        style={{
          margin: "0",
          marginLeft: 10,
          color: "white",
          fontSize: "1.9rem",
          opacity: "0.8",
          fontWeight: 400,
        }}
      >
        {` (${
          movie.release_date
            ? movie.release_date.slice(0, 4)
            : movie.first_air_date
            ? movie.first_air_date.slice(0, 4)
            : "unknown"
        })`}
      </h2>
    </div>
  );
}
