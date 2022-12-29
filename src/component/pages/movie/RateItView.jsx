import React, { useState, useEffect } from "react";
import { StarOutlined, StarFilled, LoadingOutlined } from "@ant-design/icons";
import { Tooltip, Rate } from "antd";
import "../../../module/movie.css";

export default function RateItView({
  handelAddRating,
  isRated,
  rateValue,
  setRateValue,
  isLoading,
  movie,
}) {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [rated, setRated] = useState(0);

  useEffect(() => {
    setRated(0);
  }, [movie]);

  const customColors = ["#081c22"];
  const handleHoverChange = (open) => {
    setHovered(open);
    setClicked(false);
  };
  const handleClickChange = (open) => {
    setHovered(false);
    setClicked(open);
  };

  function handleChange(rate) {
    setRateValue(rate * 2);
    setRated(rate * 2);
    handelAddRating(rate);
  }

  return (
    <Tooltip
      color={customColors}
      title={
        rateValue ? (
          <span>{`Rated ${rateValue || rated}.0`}</span>
        ) : (
          <span>Rate It!</span>
        )
      }
      trigger="hover"
      placement="bottom"
      open={hovered}
      onOpenChange={handleHoverChange}
    >
      <Tooltip
        color={customColors}
        title={
          isLoading ? (
            <LoadingOutlined
              style={{
                fontSize: 24,
              }}
              spin
            />
          ) : (
            <Rate
              onChange={handleChange}
              defaultValue={rateValue ? parseInt(rateValue) / 2 : 0}
              value={rated / 2 || parseInt(rateValue) / 2}
            />
          )
        }
        trigger="click"
        placement="bottom"
        open={clicked}
        onOpenChange={handleClickChange}
      >
        <div className="HeartFieldContainer">
          {isRated ? (
            <StarFilled style={{ fontSize: "15px", color: "#fcd535" }} />
          ) : (
            <StarOutlined style={{ fontSize: "15px" }} />
          )}
        </div>
      </Tooltip>
    </Tooltip>
  );
}
