import React from "react";

import Plane from "../../Assets/plane.png"
import Departure from "../../Assets/departures.png";
import Landing from "../../Assets/landing.png";
import Ticket from "../../Assets/ticket.png";
import Calendar from "../../Assets/calendartime.png";
import { useEffect, useState } from 'react';
import HeaderAll from "../../Components/HeaderAll";
import { Link } from "react-router-dom";

const TravelAgentBookFlight = () => {

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
    {/* {data.map(item => (
                          // <div key={item.id}>{item.departure_destination}</div>
                          <li>
                          <a class="dropdown-item" href="#">
                          {item.arrival_destination}
                          </a>
                        </li>
                        ))} */}
     <HeaderAll/>
     <div class="p-5 m-5 border rounded justify-content-center">
      <div class="fs-2 fw-bold justify-content-center my-3">Flight Booking</div>
      <form class="row g-3">
        {/*From-To */}
        <div class="row justify-content-start">
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              From
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for="inputState" class="form-label">
              To
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>

        {/*Class and number of tickets */}
        <div class="row justify-content-start mt-3">
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Class
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Number of Tickets
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>

        {/*Departure and return dates */}
        <div class="row justify-content-start mt-3">
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Departure
            </label>
            <input id="startDate" class="form-control" type="date" />
          </div>

          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Return
            </label>
            <input id="startDate" class="form-control" type="date" />
          </div>
        </div>
        <div class="col-12">
          <Link to="/travel/dashboard/flight/select">
          <button type="submit" class="btn btn-secondary">
            Next
          </button>
          </Link>
        
        </div>
      </form>
    </div>
    </>
  );
};

export default TravelAgentBookFlight;
