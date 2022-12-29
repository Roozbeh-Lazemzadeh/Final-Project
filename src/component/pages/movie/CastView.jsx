import React from "react";
import { baseUrl, apikey, posterImg } from "../../../apiConfig";

export default function CastView({ cast }) {
  return (
    <div className="castWrapper">
      <h2>Top Billed Cast</h2>
      <div className="castContainer">
        {cast.map((item) => (
          <div className="castCard" key={item.name}>
            <img src={posterImg(item.profile_path, "w185")} />
            <h3>{item.name}</h3>
            <h5>{item.character}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
