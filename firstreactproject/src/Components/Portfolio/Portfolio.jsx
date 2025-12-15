import React, { useState } from "react";
import Modal from "../Modal/Modal";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  function openModal(img) {
    setSelectedImage(img);
  }

  function closeModal() {
    setSelectedImage(null);
  }

  return (
    <>
      <div className="portfolio d-flex flex-column justify-content-center align-items-center  text-center py-5">
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder pt-5">
          PORTFOLIO COMPONENT
        </h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3"></div>
        </div>

        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-sm-6 col-md-4">
              <div
                onClick={() =>
                  openModal(
                    "https://routeegy.github.io/startFramework/assets/images/poert1.png"
                  )
                }
                className="rounded-3 overflow-hidden position-relative"
              >
                <img
                  className="w-100 rounded-3"
                  src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
                />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div
                onClick={() =>
                  openModal(
                    "https://routeegy.github.io/startFramework/assets/images/port2.png"
                  )
                }
                className="rounded-3 overflow-hidden position-relative"
              >
                <img
                  className="w-100 rounded-3"
                  src="https://routeegy.github.io/startFramework/assets/images/port2.png"
                />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div
                onClick={() =>
                  openModal(
                    "https://routeegy.github.io/startFramework/assets/images/port3.png"
                  )
                }
                className="rounded-3 overflow-hidden position-relative"
              >
                <img
                  className="w-100 rounded-3"
                  src="https://routeegy.github.io/startFramework/assets/images/port3.png"
                />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div
                onClick={() =>
                  openModal(
                    "https://routeegy.github.io/startFramework/assets/images/poert1.png"
                  )
                }
                className="rounded-3 overflow-hidden position-relative"
              >
                <img
                  className="w-100 rounded-3"
                  src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
                />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div
                onClick={() =>
                  openModal(
                    "https://routeegy.github.io/startFramework/assets/images/port2.png"
                  )
                }
                className="rounded-3 overflow-hidden position-relative"
              >
                <img
                  className="w-100 rounded-3"
                  src="https://routeegy.github.io/startFramework/assets/images/port2.png"
                />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div
                onClick={() =>
                  openModal(
                    "https://routeegy.github.io/startFramework/assets/images/port3.png"
                  )
                }
                className="rounded-3 overflow-hidden position-relative"
              >
                <img
                  className="w-100 rounded-3"
                  src="https://routeegy.github.io/startFramework/assets/images/port3.png"
                />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal image={selectedImage} onClose={closeModal} />
    </>
  );
}
