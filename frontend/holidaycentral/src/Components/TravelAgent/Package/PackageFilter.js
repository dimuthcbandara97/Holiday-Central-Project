import React from "react";
import HeaderAll from "../../Headers/HeaderAll";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";

const BookHotel = () => {
  // From
  const [package_rating, setPackageRating] = useState("");
  // To
  const [min_price, setMinPrice] = useState("");
  // Departure
  const [max_price, setMaxPrice] = useState("");
  // Return
  const [duration, setDuration] = useState("");

  const queryParams = {
    package_rating,
    min_price,
    max_price,
    duration,
  };

  const query = new URLSearchParams(queryParams).toString();
  const url = `http://localhost:4000/api/package/filter?${query}`;

  const { data, loading, error, reFetch } = useFetch(url);

  const handleSearch = (e) => {
    e.preventDefault();
    reFetch();
  };
  return (
    <>
      <HeaderAll />
      <div class="p-5 m-5 border rounded justify-content-center">
        <div class="fs-2 fw-bold justify-content-center my-3">
          Package Booking
        </div>
        <form class="row g-3">
          {/*Star Rating */}
          <div class="row justify-content-start mt-3">
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Package Rating
              </label>
              <select
                id="inputState"
                class="form-select"
                value={package_rating} // Added value attribute to sync state with the selected value
                onChange={(e) => setPackageRating(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            {/*Price */}

            <div class="col-md-2">
              <label class="form-label">Minimum Price</label>
              <input
                type="number"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Min"
                value={min_price} // Added value attribute to sync state with the selected value
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>

            <div class="col-md-2">
              <label class="form-label">Maximum Price</label>
              <input
                type="number"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Max"
                value={max_price} // Added value attribute to sync state with the selected value
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>

            {/*Facilities*/}
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
                <option value="1">1 Week</option>
                <option value="2">2 Weeks</option>
                <option value="3">3 Weeks</option>
                <option value="4">4 Weeks</option>
              </select>
            </div>

            <div class="col-2 mt-4">
              <button
                type="submit"
                class="btn btn-secondary"
                onClick={handleSearch}
              >
                Filter
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="p-5 m-5 border rounded justify-content-start">
        {loading && <p>Loading...</p>}

        {error && <p>The Selected Options Isn't Available </p>}

        <div class="fs-3">Overall Details Of The Packages</div>
        <table class="table table-bordered border-primary text-center">
          <thead>
            <tr class="table-success">
              <th scope="col">Destination</th>
              <th scope="col">Package Rating</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              <>
                {data.map((packageReservation) => (
                  <tr scope="row" key={packageReservation.id}>
                    <td>{packageReservation.destination}</td>
                    <td>{packageReservation.package_rating}</td>
                    <td>{packageReservation.price}</td>
                    <td>
                      {" "}
                      <Link to="/travel/dashboard/package/checkout">
                        <button class="btn btn-dark">Book</button>
                      </Link>
                    </td>
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
