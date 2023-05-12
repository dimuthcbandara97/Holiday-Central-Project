import React from "react";
import HeaderAll from "../../Headers/HeaderAll";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const BookPackages = () => {
  // From
  const [destination, setDestination] = useState("");

  // Departure
  const [number_of_travellers, setNumberofTravellers] = useState("");
  // Return
  const [duration, setDuration] = useState("");

  const [speciality, setSpeciality] = useState("");

  const queryParams = {
    destination,
    duration,
    number_of_travellers,
    speciality,
  };

  const query = new URLSearchParams(queryParams).toString();
  const url = `http://localhost:4000/api/package/filter_search?${query}`;

  const { data, loading, error, reFetch } = useFetch(url);

  const handleSearch = (e) => {
    // e.preventDefault();
    // reFetch();
    cookies.set("durationPackage", duration);
    cookies.set("destinationPackage", destination);
    cookies.set("number_of_travellersPackage", number_of_travellers);
    cookies.set("specialityPackage", speciality);
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
              <select
                id="inputState"
                class="form-select"
                value={destination} // Added value attribute to sync state with the selected value
                onChange={(e) => setDestination(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="Colombo">Colombo</option>
                <option value="Negombo">Negombo</option>
                <option value="Galle">Galle</option>
                <option value="Yala">Yala</option>
              </select>
            </div>
          </div>

          {/*Duration*/}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
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
              <select
                id="inputState"
                class="form-select"
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
              <select
                id="inputState"
                class="form-select"
                value={speciality} // Added value attribute to sync state with the selected value
                onChange={(e) => setSpeciality(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="Honeymoon">Honeymoon</option>
                <option value="Beach_Holiday">Beach Holiday</option>
                <option value="Wildlife_Excursion">Wildlife Excursion</option>
                <option value="Family_Holiday">Family Holiday</option>
              </select>
            </div>
            <Link to="/travel/dashboard/package/select">
              <button
                type="submit"
                class="btn btn-secondary mt-4"
                onClick={handleSearch}
              >
                Next
              </button>
            </Link>
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
              <th scope="col">Speciality</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              <>
                {data.map((packageReservation) => (
                  <tr scope="row" key={packageReservation.id}>
                    <td>{packageReservation.destination}</td>

                    <td>{packageReservation.speciality}</td>
                  </tr>
                ))}
              </>
            ) : (
              <p>No reservations matching the given criteria found.</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookPackages;
