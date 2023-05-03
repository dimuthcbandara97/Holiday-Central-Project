import React from "react";
import HeaderAll from "../../Headers/HeaderAll";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";

const BookPackages = () => {
   // From
   const [destination, setDestination] = useState("");

   // Departure
   const [number_of_travellers, setNumberofTravellers] = useState("");
   // Return
   const [duration, setDuration] = useState("");

   const [speciality,setSpeciality] = useState("");
 
 
   const queryParams = {
    destination,
    duration,
    number_of_travellers,
    speciality
   };
 
   const query = new URLSearchParams(queryParams).toString();
   const url = `http://localhost:4000/api/package/filter_search?${query}`;
 
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
              <select id="inputState" class="form-select"
              value={destination} // Added value attribute to sync state with the selected value
              onChange={(e) => setDestination(e.target.value)}
              
              >
              
                <option selected>Choose...</option>
                <option value="colombo">Colombo</option>
                <option value="Negombo">Negombo</option>
                <option value="Galle">Galle</option>
              </select>
            </div>
          </div>

          {/*Duration*/}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Duration
              </label>
              <select id="inputState" class="form-select"
              value={duration} // Added value attribute to sync state with the selected value
              onChange={(e) => setDuration(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="1">1 Week</option>
                <option value="2 ">2 Weeks</option>
                <option value="3"> 3 Weeks</option>
                <option value="4">4 Weeks</option>
              </select>
            </div>
          </div>

          {/*Number of Travelers */}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Number of Travelers
              </label>
              <select id="inputState" class="form-select"
              value={number_of_travellers} // Added value attribute to sync state with the selected value
              onChange={(e) => setNumberofTravellers(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                
              </select>
            </div>
          </div>

          {/*Speciality*/}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Speciality
              </label>
              <select id="inputState" class="form-select"
              value={speciality} // Added value attribute to sync state with the selected value
              onChange={(e) => setSpeciality(e.target.value)}>
                <option selected>Choose...</option>
                <option value="honeymoon">Honeymoon</option>
                <option value="beach_holiday">Beach Holiday</option>
                <option value="wildlife_excursion">Wildlife Excursion</option>
                <option value="family_holiday">Family Holiday</option>
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
        <Link to="/travel/dashboard/package/select">
              <button type="submit" class="btn btn-secondary">
                Next
              </button>
            </Link>
      </div>
      
    </>
  );
};

export default BookPackages;
