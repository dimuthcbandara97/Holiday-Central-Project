import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderAll from "../../Headers/HeaderAll";
import useFetch from "../../../hooks/useFetch";

const BookHotel = () => {

  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [duration, setDuration] = useState("");
  const [airline, setAirline] = useState("");

  const queryParams = {
    priceMin,
    priceMax,
    duration,
    airline,
  };

  const query = new URLSearchParams(queryParams).toString();
  const url = `http://localhost:4000/api/flight/filter?${query}`;

  const { data, loading, error, reFetch } = useFetch(url);

  const handleSearch = (e) => {
    e.preventDefault();
    reFetch();
  };
  // function handleDropdownChange(e) {
  //   const selectedValue = e.target.value;
  //   setPriceMin(selectedValue);
  // }

  return (
    <>
      <HeaderAll />
      <div class="p-5 m-5 border rounded justify-content-center">
        <div class="fs-2 fw-bold justify-content-center my-3">
          Flight Booking
        </div>
        <form class="row g-3">
          {/*Duration */}
          <div class="row justify-content-start mt-3">
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Duration
              </label>
              <select
                id="inputState"
                class="form-select"
                value={duration} // Added value attribute to sync state with the selected value
                onChange={(e) => setDuration(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="2-4 Hours">2-4 Hours</option>
                <option value="3-6 Hours">3-6 Hours</option>
                <option value="3-8 Hours">3-8 Hours</option>
              </select>
            </div>

            {/*Price */}

            <div class="col-md-2">
              <label class="form-label">Minimum Price $</label>
              <input
                type="number"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Min"
                value={priceMin} // Added value attribute to sync state with the selected value
                onChange={(e) => setPriceMin(e.target.value)}
              />
            </div>

            <div class="col-md-2">
              <label class="form-label">Maximum Price $</label>
              <input
                type="number"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Max"
                value={priceMax} // Added value attribute to sync state with the selected value
                onChange={(e) => setPriceMax(e.target.value)}
              />
            </div>

            {/*Airline*/}
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Airline
              </label>
              <select
                id="inputState"
                class="form-select"
                value={airline} // Added value attribute to sync state with the selected value
                onChange={(e) => setAirline(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="Emirates">Emirates</option>
                <option value="Sri Lankan">Sri Lankan</option>
                <option value="Air France">Air France</option>
              </select>
            </div>

            <div class="col-2 mt-4">
              <button type="submit" class="btn btn-secondary">
                Filter
              </button>
            </div>
          </div>
        </form>
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
                      <td>Price: {flightReservation.price}</td>
                      <td>Duration: {flightReservation.duration}</td>
                      <td>Airline: {flightReservation.airline}</td>
                      <Link to="/travel/dashboard/flight/checkout">
                        <button class="btn btn-dark">Book</button>
                      </Link>
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



    </>
  );
};

export default BookHotel;
