import React from "react";
import HeaderAll from "../../Headers/HeaderAll";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";

const BookHotel = () => {

  // From
  const [destination, setDestination] = useState("");
  // To
  const [check_in_date, setCheckInDate] = useState("");
  // Departure
  const [check_out_date, setCheckoutDate] = useState("");
  // Return
  const [star_rating, setStarRating] = useState("");


  const queryParams = {
    destination,
    check_in_date,
    check_out_date,
    star_rating
  };

  const query = new URLSearchParams(queryParams).toString();
  const url = `http://localhost:4000/api/hotel/filter_search?${query}`;

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
          {/*Destination*/}
          <div class="row justify-content-start">
            <div class="col-md-4">
              <label for="inputState" class="form-label"
              >
                Destination
              </label>
              <select id="inputState" class="form-select"
                value={destination} // Added value attribute to sync state with the selected value
                onChange={(e) => setDestination(e.target.value)}>
                <option selected></option>
                <option value="Colombo">Colombo</option>
                <option value="Negombo">Negombo</option>
                <option value="Galle">Galle</option>
              </select>
            </div>
          </div>
          {/*Check in and out dates*/}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Check In Date
              </label>
              <input id="startDate" class="form-control" type="date"
                value={check_in_date} // Added value attribute to sync state with the selected value
                onChange={(e) => setCheckInDate(e.target.value)} />
            </div>

            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Check Out Date
              </label>
              <input id="startDate" class="form-control" type="date"
                value={check_out_date} // Added value attribute to sync state with the selected value
                onChange={(e) => setCheckoutDate(e.target.value)} />
            </div>
          </div>

          {/*Star Rating */}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Star Rating
              </label>
              <select id="inputState" class="form-select"
                value={star_rating} // Added value attribute to sync state with the selected value
                onChange={(e) => setStarRating(e.target.value)}
                >
                <option selected>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>



          <div class="col-12">
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
                      <td>Destination: {hotelReservation.destination}</td>
                      <td>Check In Date : {hotelReservation.check_in_date}</td>
                      <td>Check Out Date: {hotelReservation.check_out_date}</td>
                      <td>Star Rating: {hotelReservation.star_rating}</td>

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
      <Link to="/travel/dashboard/hotel/select">
        <button type="submit" class="btn btn-secondary">
          Next
        </button>
      </Link>

    </>
  );
};

export default BookHotel;
