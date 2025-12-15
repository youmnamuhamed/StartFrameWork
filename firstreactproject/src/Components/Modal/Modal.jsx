import React from "react";

export default function Modal({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-body p-0 position-relative">
            <button
              className="btn-close position-absolute top-0 end-0 m-3"
              onClick={onClose}
            ></button>

            <img src={image} className="w-100" alt="portfolio" />
          </div>
        </div>
      </div>
    </div>
  );
}
