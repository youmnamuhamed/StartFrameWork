import React from "react";

export default function Footer() {
  return (
    <footer className="text-white py-5">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-4 mb-4 mb-md-0 text-center">
            <h5 className="mb-3">Location</h5>
            <p className="mb-1">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0 text-center">
            <h5 className="mb-3">AROUND THE WEB</h5>
            <div className="d-flex justify-content-center gap-3 ">
              <i className="text-white fs-5 fa-brands fa-facebook"></i>

              <i className="text-white fs-5 fa-brands fa-twitter"></i>

              <i className="text-white fs-5 fa-brands fa-linkedin-in"></i>

              <i className="text-white fs-5 fa-solid fa-globe"></i>
            </div>
          </div>
          <div className="col-12 col-md-4 text-center">
            <h5 className="mb-3">ABOUT FREELANCER</h5>
            <p className="mb-0">
              Freelancer is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
