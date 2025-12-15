import React from "react";

export default function Home() {
  return (
    <>
      <div className="home d-flex justify-content-center align-items-center text-white vh-100">
        <div className="text-center">
          <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" />
          <div className="text-center pt-4 text-white">
            <h2 className="fw-bold">START FRAMEWORK</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line me-3 bg-white"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3 bg-white"></div>
            </div>
            <div>Graphic Artist - Web Designer - Illustrator</div>
          </div>
        </div>
      </div>
    </>
  );
}
