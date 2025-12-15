import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="Contacts d-flex flex-column justify-content-center align-items-center vh-100 py-5">
      <h2 className="text-uppercase mb-3 fs-1 fw-bolder">CONTACTS SECTION</h2>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="field mb-4">
              <label className={form.name ? "label active" : "label"}>
                userName :
              </label>
              <input
                type="text"
                name="name"
                className="form-control border-0 border-bottom rounded-0"
                placeholder="userName"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="field mb-4">
              <label className={form.age ? "label active" : "label"}>
                userAge :
              </label>
              <input
                type="number"
                name="age"
                className="form-control border-0 border-bottom rounded-0"
                placeholder="userAge"
                value={form.age}
                onChange={handleChange}
              />
            </div>
            <div className="field mb-4">
              <label className={form.email ? "label active" : "label"}>
                userEmail :
              </label>
              <input
                type="email"
                name="email"
                className="form-control border-0 border-bottom rounded-0"
                placeholder="userEmail"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="field mb-4">
              <label className={form.password ? "label active" : "label"}>
                userPassword :
              </label>
              <input
                type="password"
                name="password"
                className="form-control border-0 border-bottom rounded-0"
                placeholder="userPassword"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-success mt-3">send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
