import React from "react";

import Plane from "../../Assets/plane.png"
import Departure from "../../Assets/departures.png";
import Landing from "../../Assets/landing.png";
import Ticket from "../../Assets/ticket.png";
import Calendar from "../../Assets/calendartime.png";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import HeaderAll from "../../Components/HeaderAll";

const TravelAgentBookPackage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/api/flight";
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(e => console.log("", e));
  }, []);

  return (
    <>
      <HeaderAll/>

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
                  Hotel
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
                        {data.map(item => (
                          // <div key={item.id}>{item.departure_destination}</div>
                          <li>
                          <a class="dropdown-item" href="#">
                          {item.departure_destination}
                          </a>
                        </li>
                        ))}
                        

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
                       {data.map(item => (
                          // <div key={item.id}>{item.departure_destination}</div>
                          <li>
                          <a class="dropdown-item" href="#">
                          {item.arrival_destination}
                          </a>
                        </li>
                        ))}
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

export default TravelAgentBookPackage;
