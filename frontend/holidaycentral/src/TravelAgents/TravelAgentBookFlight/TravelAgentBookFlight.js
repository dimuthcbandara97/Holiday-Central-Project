import React from "react";

import Plane from "../../Assets/plane.png"
 import Departure from "../../Assets/departures.png";
import Landing from "../../Assets/landing.png";
 import Ticket from "../../Assets/ticket.png";
 import Calendar from "../../Assets/calendartime.png";

const TravelAgentBookFlight = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-xl">
          <a class="navbar-brand fw-bold" href="#">
            <i class="bi bi-square-half"></i> Holiday Central
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse  justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav fw-normal">
              <li class="nav-item mx-2">
                <a class="nav-link text-secondary" aria-current="page" href="#">
                  <i class="bi bi-cart"></i> Cart
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link text-secondary" href="#">
                  <i class="bi bi-calendar4-week"></i> My bookings
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link text-secondary" href="#">
                  <i class="bi bi-gear"></i> Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container my-4">
        <div class="row justify-content-start ">
          <div class="col-12 mt-3">
            <div className="row">
              <div className="col-12 d-flex">
                <img
                  src={Plane}
                  alt=""
                  width={60}
                  height={60}
                  h
                  className="me-3"
                />
                <h3 class="fw-bold">
                  Flight Ticket
                  <br /> Reservation
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div class="container border p-4 mt-5">
        <div className="row">
          <div class="lead text-mute text-center fw-bold">Round Trips</div>
        </div>
        <div className="row">
          {/* Departure and arrival */}
          <div className="col-12 col-lg-6 my-5">
            <div className="row">
              <div class="col-4">
                <img src={Departure} alt="" width={60} />
              </div>
              <div className="col-8">
                <div className="row">
                  <div class="col-6 mt-2 text-secondary">From</div>
                  <div class="mt-2 col-6">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle bg-white text-dark "
                        type="button"
                        id="from-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        - Select -
                      </button>
                      <ul
                        class="dropdown-menu text-start"
                        aria-labelledby="from-dropdown"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Sri Lanka CMB
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Singapore SG
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            UK Liverpool
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-4">
                <img src={Landing} alt="" width={60} />
              </div>
              <div className="col-8">
                <div className="row">
                  <div class="col-6 mt-2 text-secondary">To</div>
                  <div class="col-6 mt-2">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle bg-white text-dark "
                        type="button"
                        id="from-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        - Select -
                      </button>
                      <ul
                        class="dropdown-menu text-start"
                        aria-labelledby="from-dropdown"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Sri Lanka CMB
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Singapore SG
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            UK Liverpool
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 my-5">
            {/* Dates */}
            <div class="row">
              <div class="col-4 mt-2">
                {/* image */}
                <img src={Ticket} alt="" width={80} />
              </div>
              <div class="col-8">
                <div class="row">
                  {/*row one class*/}
                  <div class="col-6 mt-3">Class</div>
                  <div class="col-6 mt-2 ">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle bg-white text-dark "
                        type="button"
                        id="from-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        - Select -
                      </button>
                      <ul
                        class="dropdown-menu text-start"
                        aria-labelledby="from-dropdown"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Economy Class
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Business Class
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row">
                  {/*row two person count*/}
                  <div class="col-6 mt-3">Count</div>
                  <div class="col-6 mt-2">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle bg-white text-dark "
                        type="button"
                        id="from-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        - Select -
                      </button>
                      <ul
                        class="dropdown-menu text-start"
                        aria-labelledby="from-dropdown"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            1
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            2
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            3
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            4
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            5
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            6
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            7
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            8
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 my-5">
            <div class="row">
              <div class="col-4 mt-2">
                {/* image */}
                <img src={Calendar} alt="" width={80} />
              </div>
              <div class="col-8">
                <div class="row">
                  {/*row one class*/}
                  <div class="col-6 mt-3">Departure</div>
                  <div class="col-6 mt-2">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle bg-white text-dark "
                        type="button"
                        id="from-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        - Select -
                      </button>
                      <ul
                        class="dropdown-menu text-start"
                        aria-labelledby="from-dropdown"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Economy Class
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Business Class
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row">
                  {/*row two person count*/}
                  <div class="col-6 mt-3">Return</div>
                  <div class="col-6 mt-2 ">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle bg-white text-dark "
                        type="button"
                        id="from-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        - Select -
                      </button>
                      <ul
                        class="dropdown-menu text-start"
                        aria-labelledby="from-dropdown"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            1
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            2
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            3
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            4
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            5
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            6
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            7
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            8
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelAgentBookFlight;
