import React from "react";
import HeaderAll from "../../Headers/HeaderAll";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";

const BookPackages = () => {
   // From
   const [destination, setPackageRating] = useState("");
   // To
   const [price, setMinPrice] = useState("");
   // Departure
   const [number_of_travellers, setMaxPrice] = useState("");
   // Return
   const [duration, setDuration] = useState("");

   const [speciality,setSpeciality] = useState("");
 
 
 
   const queryParams = {
    destination,
    duration,
    number_of_travellers,
    price,
    speciality
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
                  {data.map((packageReservation) => (
                    <tr scope="row" key={packageReservation.id}>
                      <td>Destination: {packageReservation.destination}</td>
                      <td>Duration : {packageReservation.duration}</td>
                      <td>Number Of travellers: {packageReservation.number_of_travellers}</td>
                      <td>Speciality: {packageReservation.speciality}</td>

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
      <Link to="/travel/dashboard/package/select">
              <button type="submit" class="btn btn-secondary">
                Next
              </button>
            </Link>
    </>
  );
};

export default BookPackages;
