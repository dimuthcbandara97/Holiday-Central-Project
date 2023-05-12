import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const queryParams = {
    email,
    password,
  };

  const query = new URLSearchParams(queryParams).toString();
  const url = `http://localhost:4000/api/login`;

  const { data, loading, error, reFetch } = useFetch(url);

  const handleSubmit = async (e) => {
    {
      data.length > 0 ? (
        <>
          {data.map((flightReservation) => (
            <tr scope="row" key={flightReservation.id}>
              if(flightReservation.email == {email} &&
              flightReservation.password = {password})
              {navigate("/travel/dashboard")}
              else {navigate("/travel/dashboard")}
            </tr>
          ))}
        </>
      ) : (
        <p>No flight reservations matching the given criteria found.</p>
      );
    }
  };

  const setEmailCookie = () => {
    cookies.set("agentEmail", email);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-xl">
          <a className="navbar-brand fw-bold" href="#">
            <i className="bi bi-square-half"></i> Holiday Central
          </a>
        </div>
      </nav>

      <div className="container border p-4 mt-5 bg-light col-4 rounded">
        <div className="text-center fw-bold fs-1">User Login</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary justify-content-center"
            onClick={setEmailCookie}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
