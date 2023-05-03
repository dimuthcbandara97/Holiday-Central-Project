import React from "react";

import Plane from "../../../Assets/plane.png"
import Departure from "../../../Assets/departures.png";
import Landing from "../../../Assets/landing.png";
import Ticket from "../../../Assets/ticket.png";
import Calendar from "../../../Assets/calendartime.png";
import { useEffect, useState } from 'react';
import HeaderAll from "../../Headers/HeaderAll";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const TravelAgentBookFlight = () => {

  // From
  const [departure_destination, setDepartureDestination] = useState("");
  // To
  const [arrival_destination, setArrivalDestination] = useState("");
  // Departure
  const [departure_date, setDepartureDate] = useState("");
  // Return
  const [arrival_date, setArrivalDate] = useState("");
  // Class
  const [cabin_class, setCabinClass] = useState("");

  const queryParams = {
    departure_destination,
    arrival_destination,
    departure_date,
    arrival_date,
    cabin_class
  };

  const query = new URLSearchParams(queryParams).toString();
  const url = `http://localhost:4000/api/flight/filter_search?${query}`;

  const { data, loading, error, reFetch } = useFetch(url);

  const handleSearch = (e) => {
    e.preventDefault();
    reFetch();
  };
  return (
    <>

      <HeaderAll />
      <div class="p-5 m-5 border rounded justify-content-center">
        <div class="fs-2 fw-bold justify-content-center my-3">Flight Booking</div>
        <form class="row g-3">
          {/*From-To */}
          <div class="row justify-content-start">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                From (Departure Destination)
              </label>
              <select id="inputState" class="form-select"
              value={departure_destination} // Added value attribute to sync state with the selected value
              onChange={(e) => setDepartureDestination(e.target.value)}
              >
                <option ></option>
                <option value="Colombo">Colombo</option>
              </select>
            </div>

            <div class="col-md-4">
              <label for="inputState" class="form-label">
                To (Arrival Destination)
              </label>
              <select id="inputState" class="form-select"
               value={arrival_destination} // Added value attribute to sync state with the selected value
               onChange={(e) => setArrivalDestination(e.target.value)}
              >
                <option selected></option>
                <option value="France">France</option>
              </select>
            </div>
          </div>

          {/*Class and number of tickets */}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Class
              </label>
              <select id="inputState" class="form-select"
               value={cabin_class} // Added value attribute to sync state with the selected value
               onChange={(e) => setCabinClass(e.target.value)}
              >
                <option selected></option>
                <option value="Economy">Economy</option>
              </select>
            </div>

            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Number of Tickets
              </label>
              <select id="inputState" class="form-select"
              >
                <option selected></option>
                <option>...</option>
              </select>
            </div>
          </div>

          {/*Departure and return dates */}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Departure Date
              </label>
              <input id="startDate" class="form-control" type="date" 
              value={departure_date}
              onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>

            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Return Date
              </label>
              <input id="startDate" class="form-control" type="date" 
               value={arrival_date}
               onChange={(e) => setArrivalDate(e.target.value)}
              />
            </div>
          </div>


          <div class="p-5 m-5 border rounded justify-content-start">
        {loading && <p>Loading...</p>}

        {error && <p>Error Finding the log </p>}

        <table class="table">

          <thead>
            <tr>
              <th scope="col">Overall Details Of The Fligts</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>

            <tr>
              {data.length > 0 ? (
                <>
                  {data.map((flightReservation) => (
                    <tr scope="row" key={flightReservation.id}>
                      <td>Departure: {flightReservation.departure_destination}</td>
                      <td>Arrival: {flightReservation.arrival_destination}</td>
                      <td>Cabin Class: {flightReservation.cabin_class}</td>
                      <td>Departure Date: {flightReservation.departure_date}</td>
                      <td>Return Date: {flightReservation.arrival_date}</td>
                      {/* <Link to="/travel/dashboard/flight/checkout">
                        <button class="btn btn-dark">Book</button>
                      </Link> */}
                    </tr>
                  ))}</>) : (
                <p>No flight reservations matching the given criteria found.</p>
              )}
              <td>
                <div class="d-flex flex-row  mb-3">
                  <div>
                    {/*  */}

                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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
