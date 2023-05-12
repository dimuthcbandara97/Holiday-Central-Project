import React, { useState, useEffect } from "react";
import HeaderAll from "./Headers/HeaderAll";
import useFetch from "../hooks/useFetch";
import axios from "axios";

const Booking = () => {
  const [dataFlight, setDataFlight] = useState([]);
  const [dataHotel, setDataHotel] = useState([]);
  const [dataPackage, setDataPackage] = useState([]);

  useEffect(() => {
    // Cart Flight
    axios
      .get("http://localhost:4000/api/checkout/flight")
      .then((response) => {
        setDataFlight(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // Cart Hotel
    axios
      .get("http://localhost:4000/api/checkout/hotel")
      .then((response) => {
        setDataHotel(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // // Cart Package
    axios
      .get("http://localhost:4000/api/checkout/package")
      .then((response) => {
        setDataPackage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <HeaderAll />

      <div class="container m-3 ps-3">
        <div class="display-4 fw-bold text-dark">
          <i class="bi bi-calendar-check me-4"></i>Reservations
        </div>
        <div class="container border rounded mt-5 p-3 fw-bold">
          <div class="display-6">Flight Reservations</div>
          <table class="table table-bordered border-primary text-center">
            <thead>
              <tr class="table-success">
                <th scope="col">Agent Name</th>
                <th scope="col">User Name</th>
                <th scope="col">User Email</th>
                <th scope="col">Bill Date</th>
                <th scope="col">Additional Note</th>
                <th scope="col">Departure Destination</th>
                <th scope="col">Arrival Destination</th>
                <th scope="col">Departure Date</th>
                <th scope="col">Arrival Date</th>
                <th scope="col">Cabin Class</th>
                <th scope="col">Price</th>
                <th scope="col">Duration</th>
                <th scope="col">Airline</th>
                <th scope="col">Indian Food</th>
                <th scope="col">Sri Lankan Food</th>
                <th scope="col">Italian Food</th>
              </tr>
            </thead>

            <tbody>
              {dataFlight.map((item) => (
                <tr key={item.id}>
                  <td> {item.agent_name}</td>
                  <td> {item.user_name}</td>
                  <td> {item.user_email}</td>
                  <td> {item.checkout_date}</td>
                  <td> {item.additional_note}</td>
                  <td> {item.departure_destination}</td>
                  <td> {item.arrival_destination}</td>
                  <td> {item.departure_date}</td>
                  <td> {item.arrival_date}</td>
                  <td> {item.cabin_class}</td>
                  <td> {item.price}</td>
                  <td> {item.duration} Days</td>
                  <td> {item.airline}</td>
                  <td>{item.meal_preferences.indian}</td>
                  <td> {item.meal_preferences.sri_lankan}</td>
                  <td>{item.meal_preferences.italian}</td>
                </tr>
              ))}

              {dataFlight.map((item) => (
                <div key={item.id}>
                  <tr></tr>
                  {/* <h3>{item.agent_name}</h3>
          <p>{item.duration ? 'Completed' : 'Not completed'}</p> */}
                </div>
              ))}
            </tbody>
          </table>
        </div>
        <div class="container border rounded mt-5 p-3 fw-bold">
          <div class="display-6">Hotel Reservations</div>
          <table class="table table-bordered border-primary text-center">
            <thead>
              <tr class="table-success">
                <th scope="col">Agent Name</th>
                <th scope="col">Agent Email</th>
                <th scope="col">Destination</th>
                <th scope="col">Bill Date</th>
                <th scope="col">Star Rating</th>
                <th scope="col">Price</th>

                <th scope="col">Room Selection</th>
                <th scope="col">Board Basis</th>

                <th scope="col">Pool</th>
                <th scope="col">Kids Play Area</th>
                <th scope="col">Beach Access</th>
                <th scope="col">Additional Notes</th>
              </tr>
            </thead>
            <tbody>
              {dataHotel.map((item) => (
                <tr key={item.id}>
                  <td> {item.agent_name}</td>
                  <td> {item.user_email}</td>
                  <td> {item.destination}</td>
                  <td> {item.check_out_date}</td>
                  <td> {item.star_rating}</td>
                  <td> {item.pricing}</td>

                  <td>{item.room_selection} </td>
                  <td>{item.board_basis}</td>

                  <td>
                    {item.facilities.pool ? "Available" : "Not Available"}
                  </td>
                  <td>
                    {item.facilities.kids_play_area
                      ? "Available"
                      : "Not Available"}
                  </td>
                  <td>
                    {item.facilities.beach_access
                      ? "Available"
                      : "Not Available"}
                  </td>
                  <td> {item.aditional_note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="container border rounded mt-5 p-3 fw-bold">
          <div class="display-6">Package Reservations</div>
          <table class="table table-bordered border-primary text-center">
            <thead>
              <tr class="table-success">
                <th scope="col">Agent Name</th>
                <th scope="col">Agent Email</th>
                <th scope="col">Destination</th>
                <th scope="col">Bill Date</th>
                <th scope="col">Duration</th>
                <th scope="col">Travellers Count</th>
                <th scope="col">Price</th>
                <th scope="col">Package Rating</th>
                <th scope="col">Honeymoon</th>
                <th scope="col">Beach Holiday</th>
                <th scope="col">WildLife Excursion</th>
                <th scope="col">Family Holiday</th>
              </tr>
            </thead>
            <tbody>
              {dataPackage.map((item) => (
                <tr key={item.id}>
                  <td> {item.agent_name}</td>
                  <td> {item.user_email}</td>
                  <td> {item.destination}</td>
                  <td> {item.checkout_date}</td>

                  <td> {item.duration} days</td>
                  <td> {item.number_of_travellers}</td>
                  <td> {item.price}</td>
                  <td> {item.package_rating}</td>
                  <td> {item.speciality.honeymoon ? "Yes" : "No"}</td>
                  <td> {item.speciality.beach_holiday ? "Yes" : "No"}</td>
                  <td> {item.speciality.wildlife_excursion ? "Yes" : "No"}</td>
                  <td> {item.speciality.family_holiday ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Booking;
