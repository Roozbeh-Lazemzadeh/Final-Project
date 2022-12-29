import React from "react";

export default function ReleaseGenreDuration({ movie }) {
  return (
    <div id="release-genre-duration" style={{ marginBottom: 13 }}>
      <span>
        {movie.title ? movie.release_date.replaceAll("-", "/") : ""}
        {movie.production_countries.length
          ? ` (${movie.production_countries[0].iso_3166_1})`
          : ""}
      </span>
      <span style={{ marginLeft: 10 }}>
        {"  • "}
        Genres:{" "}
        {movie
          ? movie.genres.map((item, index) => (
              <span key={index}>
                {`${item.name}
                         ${index < movie.genres.length - 1 ? "," : ""}`}
              </span>
            ))
          : ""}
      </span>
      <span style={{ marginLeft: 10 }}>
        {movie.runtime || movie.runtime == 0 || movie.episode_run_time.length
          ? `• ${movie.runtime || movie.episode_run_time || 0}m`
          : ""}
      </span>
    </div>
  );
}
