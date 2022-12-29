import React, { useState } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import "../../../module/movie.css";

export default function WatchTrailer({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function showTrailer() {
    setIsModalOpen(true);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="watchTrailerContainer"
        style={{ cursor: "pointer" }}
        onClick={showTrailer}
      >
        <CaretRightOutlined style={{ fontSize: "25px" }} />
        <h6>Play Trailer</h6>
      </div>
      {isModalOpen && (
        <Modal
          title="Trailer"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          style={{ backgroundColor: "black", padding: 0 }}
        >
          <iframe
            className="iframe"
            allowFullScreen={true}
            width="520"
            height="335"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
          ></iframe>
        </Modal>
      )}
    </>
  );
}
