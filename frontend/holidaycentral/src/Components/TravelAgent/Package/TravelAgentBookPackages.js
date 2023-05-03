import React from "react";
import HeaderAll from "../../Headers/HeaderAll";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";

const BookPackages = () => {
  // localhost:4000/api/package/filter_search

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
      <div class="p-5 m-5 col-6 border rounded justify-content-center">
        <div class="fs-2 fw-bold justify-content-center my-3">
          Package Booking
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

          {/*Duration*/}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Duration
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>1 Week</option>
                <option>2 Weeks</option>
                <option>3 Weeks</option>
                <option>4 Weeks</option>
              </select>
            </div>
          </div>

          {/*Number of Travelers */}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Number of Travelers
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
          </div>

          {/*Speciality*/}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Speciality
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>Honeymoon</option>
                <option>Beach Holiday</option>
                <option>Wildlife Excursion</option>
                <option>Family Holiday</option>
              </select>
            </div>
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
              <th scope="col">Star Rating</th>
              <th scope="col">Duration</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                
              </td>
            </tr>
          </tbody>
        </table>
        <div class="col-12">
            <Link to="/travel/dashboard/package/select">
              <button type="submit" class="btn btn-secondary">
                Next
              </button>
            </Link>
          </div>
      </div>
    </>
  );
};

export default BookPackages;
