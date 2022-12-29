import React from "react";
import "../../../module/movie.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function UserScore({ movie }) {
  return (
    <div className="circularChart_and_Other_Icons">
      <div className="circularChart">
        <CircularProgressbar
          value={movie && Math.round(movie.vote_average * 10)}
          text={`${movie && Math.round(movie.vote_average * 10)}%`}
          styles={buildStyles({
            strokeLinecap: "butt",
            textSize: "26px",
            pathTransitionDuration: 0.5,
            pathColor: `rgb(33, 208, 122, ${movie && movie.vote_average * 10})`,
            textColor: "#fff",
            trailColor: "#204529",
            backgroundColor: "#081c22",
          })}
        />
      </div>
      <h6>User Score</h6>
    </div>
  );
}
