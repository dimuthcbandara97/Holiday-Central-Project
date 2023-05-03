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
        <div class="fs-2 fw-bold justify-content-center my-3">
          Hotel Booking
        </div>
        <form class="row g-3">
          {/*Destination*/}
          <div class="row justify-content-start">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Destination
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>Colombo</option>
                <option>Negombo</option>
                <option>Galle</option>
              </select>
            </div>
          </div>
          {/*Check in and out dates*/}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Check In Date
              </label>
              <input id="startDate" class="form-control" type="date" />
            </div>

            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Check Out Date
              </label>
              <input id="startDate" class="form-control" type="date" />
            </div>
          </div>

          {/*Star Rating */}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Star Rating
              </label>
              <select id="inputState" class="form-select">
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
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hotel Name</th>
              <th scope="col">Price</th>
              <th scope="col">Facilities</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/travel/dashboard/hotel/select">
              <button type="submit" class="btn btn-secondary">
                Next
              </button>
            </Link>
      </div>
      
    </>
  );
};

export default BookHotel;
