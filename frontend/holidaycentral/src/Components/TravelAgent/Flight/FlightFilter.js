import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderAll from "../../Headers/HeaderAll";
import useFetch from "../../../hooks/useFetch";
import Cookies from 'universal-cookie';
const cookies = new Cookies();



const BookHotel = () => {
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [airline, setAirline] = useState("");

  const queryParams = {
    price,
    duration,
    airline,
  };

  const query = new URLSearchParams(queryParams).toString();
  const url = `http://localhost:4000/api/flight/filter?${query}`;

  const { data, loading, error, reFetch } = useFetch(url);

  const handleSearch = (e) => {
    // e.preventDefault();
    // reFetch();
  cookies.set('priceFlight', price);
  cookies.set('durationFlight', duration);
  cookies.set('airlineFlight', airline);
  };


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
                <option value="4">2-4 Hours</option>
                <option value="6">3-6 Hours</option>
                <option value="8">3-8 Hours</option>
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
                value={price} // Added value attribute to sync state with the selected value
                onChange={(e) => setPrice(e.target.value)}
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

        <div class="fs-3">Overall Details Of The Fligts</div>
        <table class="table table-bordered border-primary text-center">
          <thead>
            <tr class="table-success">
              <th scope="col">Price</th>
              <th scope="col">Duration</th>
              <th scope="col">Airline</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              <>
                {data.map((flightReservation) => (
                  <tr scope="row" key={flightReservation.id}>
                    <td>{flightReservation.price}</td>
                    <td>{flightReservation.duration}</td>
                    <td>{flightReservation.airline}</td>
                    <Link
                      to={{
                        pathname: "/travel/dashboard/flight/checkout",
                      }}
                    >
                      <button class="btn btn-dark" onClick={handleSearch}>Book</button>
                    </Link>
                  </tr>
                ))}
              </>
            ) : (
              <p>No flight reservations matching the given criteria found.</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookHotel;
