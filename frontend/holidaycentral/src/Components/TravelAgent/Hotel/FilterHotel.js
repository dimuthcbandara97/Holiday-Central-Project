import React from "react";
import HeaderAll from "../../Headers/HeaderAll";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Cookies from "universal-cookie";
const cookies = new Cookies();

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
    // e.preventDefault();
    // reFetch();
    cookies.set("min_priceHotel", e.pricing);
    cookies.set("max_priceHotel", e.pricing);
    // cookies.set("facilitiesHotel", facilities);

    cookies.set("destinationHotel", e.destination);
    cookies.set("ratingHotel", e.star_rating);

    if (e.facilities.Pool == true) {
      cookies.set("poolHotel", "Available");
    } else {
      cookies.set("poolHotel", "Not Available");
    }
    if (e.facilities.Play == true) {
      cookies.set("playHotel", "Available");
    } else {
      cookies.set("playHotel", "Not Available");
    }
    if (e.facilities.Beach == true) {
      cookies.set("beachHotel", "Available");
    } else {
      cookies.set("beachHotel", "Not Available");
    }

    //just true/false

    cookies.set("poolHotelTF", e.facilities.Pool);
    cookies.set("playHotelTF", e.facilities.Play);
    cookies.set("beachHotelTF", e.facilities.Beach);


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
              <select
                id="inputState"
                class="form-select"
                value={star_rating} // Added value attribute to sync state with the selected value
                onChange={(e) => setStarRating(e.target.value)}
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
              <select
                id="inputState"
                class="form-select"
                value={facilities} // Added value attribute to sync state with the selected value
                onChange={(e) => setFacilities(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="Pool">Pool</option>
                <option value="Play">Kids Play Area</option>
                <option value="Beach">Beach Access</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <div class="p-5 m-5 border rounded justify-content-start">
        {loading && <p>Loading...</p>}

        {error && <p>The Selected Options Isn't Available </p>}

        <div class="fs-3">Overall Details Of The Hotels</div>
        <table class="table table-bordered border-primary text-center">
          <thead>
            <tr class="table-success">
              <th scope="col">Destination</th>
              <th scope="col">Star Rating</th>
              <th scope="col">Price</th>
              <th scope="col">Pool Area</th>
              <th scope="col">Kids Play Area</th>
              <th scope="col">Beach Access</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              <>
                {data.map((hotelReservation) => (
                  <tr scope="row" key={hotelReservation.id}>
                    <td>{hotelReservation.destination}</td>
                    <td>{hotelReservation.star_rating}</td>
                    <td>{hotelReservation.pricing}</td>
                    <td>
                      {hotelReservation.facilities.Pool
                        ? "Available"
                        : "Not Available"}
                    </td>
                    <td>
                      {hotelReservation.facilities.Play
                        ? "Available"
                        : "Not Available"}
                    </td>
                    <td>
                      {hotelReservation.facilities.Beach
                        ? "Available"
                        : "Not Available"}
                    </td>

                    <td>
                      <Link to="/travel/dashboard/hotel/checkout">
                        <button
                          class="btn btn-dark"
                          onClick={() => handleSearch(hotelReservation)}
                        >
                          Book
                        </button>
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
