import React from "react";

export default function Overview({ movie }) {
  return (
    <>
      <p>{movie ? "Overview" : ""}</p>
      <span>
        {movie.overview
          ? movie.overview
          : "We don't have an overview translated in English. Help us expand our database by adding one."}
      </span>
    </>
  );
}
