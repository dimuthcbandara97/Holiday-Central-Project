import React from "react";
import HeaderAll from "../../Headers/HeaderAll";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";

const BookHotel = () => {

  // From
  const [star_rating, setStarRating] = useState("");
  // To
  const [min_price, setMinPrice] = useState("");
  // Departure
  const [max_price, setMaxPrice] = useState("");
  // Return
  const [facilities, setFacilities] = useState("");

  const queryParams = {
    star_rating,
    min_price,
    max_price,
    facilities,

  };

  const query = new URLSearchParams(queryParams).toString();
  const url = `http://localhost:4000/api/hotel/filter?${query}`;

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
          Hotel Booking
        </div>
        <form class="row g-3">
          {/*Star Rating */}
          <div class="row justify-content-start mt-3">
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Star Rating
              </label>
              <select id="inputState" class="form-select"
              value={star_rating} // Added value attribute to sync state with the selected value
              onChange={(e) => setStarRating(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="1">1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>

            {/*Price */}

            <div class="col-md-2">
              <label class="form-label">Minimum Price</label>
              <input
                type="text"
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
                type="text"
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
                Facilities
              </label>
              <select id="inputState" class="form-select"
              value={facilities} // Added value attribute to sync state with the selected value
              onChange={(e) => setFacilities(e.target.value)}>
                <option selected>Choose...</option>
                <option value='pool'>Pool</option>
                <option value='kids_play_area'>Kids Play Area</option>
                <option value='beach_access'>Beach Access</option>
              </select>
            </div>

            
          </div>
          <div class="col-2 mt-4">
              <button type="submit" class="btn btn-secondary">
                Filter
              </button>
            </div>
        </form>
        
      </div>

      <div class="p-5 m-5 border rounded justify-content-start">
            {loading && <p>Loading...</p>}

            {error && <p>The Selected Options Isn't Available </p>}

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
                      {data.map((hotelReservation) => (
                        <tr scope="row" key={hotelReservation.id}>
                          <td>Star Rating: {hotelReservation.star_rating}</td>
                          <td>Price: {hotelReservation.pricing}</td>
                          <td>Facilities: {hotelReservation.facilities}</td>
                        
                          <td><Link to='/travel/dashboard/hotel/checkout'>
                    <button class="btn btn-dark">Book</button>
                    </Link></td>
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
      
    </>
  );
};

export default BookHotel;
