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
          <table class="table">
            <tbody>
              {dataFlight.map((item) => (
                <div key={item.id}>
                  <tr>
                    <td> Agent Name: {item.agent_name}</td>
                    <td> User Name: {item.user_name}</td>
                    <td> User Email: {item.user_email}</td>
                    <td> Checkout Date: {item.checkout_date}</td>
                    <td> Additional Note: {item.additional_note}</td>
                    <td>
                      {" "}
                      Departure Destination: {item.departure_destination}
                    </td>
                    <td> Arrival Destination: {item.arrival_destination}</td>
                    <td> Departure Date: {item.departure_date}</td>
                    <td> Arrival Date: {item.arrival_date}</td>
                  </tr>
                  {/* <h3>{item.agent_name}</h3>
          <p>{item.duration ? 'Completed' : 'Not completed'}</p> */}
                </div>
              ))}

              {dataFlight.map((item) => (
                <div key={item.id}>
                  <tr>
                    <td> Cabin Class: {item.cabin_class}</td>
                    <td> Price: {item.price}</td>
                    <td> Duration: {item.duration} Days</td>
                    <td> Airline: {item.airline}</td>
                    <td>
                      {" "}
                      Indian Meal Preferences: {item.meal_preferences.indian}
                    </td>
                    <td>
                      {" "}
                      Sri Lankan Meal Preferences:{" "}
                      {item.meal_preferences.sri_lankan}
                    </td>
                    <td>
                      {" "}
                      Italina Meal Preferences: {item.meal_preferences.italian}
                    </td>
                  </tr>
                  {/* <h3>{item.agent_name}</h3>
          <p>{item.duration ? 'Completed' : 'Not completed'}</p> */}
                </div>
              ))}
            </tbody>
          </table>
        </div>
        <div class="container border rounded mt-5 p-3 fw-bold">
          <div class="display-6">Hotel Reservations</div>
          <table class="table">
            <tbody>
              {dataHotel.map((item) => (
                <div key={item.id}>
                  <tr>
                    <td> Agent Name: {item.agent_name}</td>
                    <td> User Name: {item.user_name}</td>
                    <td> Agent Email: {item.agent_email}</td>
                    <td> Checkout Date: {item.checkout_date}</td>
                    <td> Destination: {item.destination}</td>
                    <td> Check In Date: {item.check_in_date}</td>
                    <td> Checkout Date: {item.check_out_date}</td>
                    <td> Star Rating: {item.star_rating}</td>
                    <td> Pricing: {item.pricing}</td>

                    <td>
                      {" "}
                      Deluxe:{" "}
                      {item.room_selection.deluxe ? "Want" : "Dont Want"}{" "}
                    </td>
                    <td>
                      {" "}
                      Super Deluxe:{" "}
                      {item.room_selection.super_deluxe
                        ? "Want"
                        : "Dont Want"}{" "}
                    </td>
                    <td>
                      {" "}
                      Suite: {item.room_selection.suite
                        ? "Want"
                        : "Dont Want"}{" "}
                    </td>
                    <td>
                      {" "}
                      Full Board{" "}
                      {item.board_basis.full_board ? "Want" : "Dont Want"}
                    </td>
                    <td> Bread Required {item.bread ? "Want" : "Dont Want"}</td>
                    <td> Breakfast {item.breakfast ? "Want" : "Dont Want"}</td>
                    <td>
                      {" "}
                      Pool: {item.facilities.pool ? "Want" : "Dont Want"}
                    </td>
                    <td>
                      {" "}
                      Kids Play Area:{" "}
                      {item.facilities.kids_play_area ? "Want" : "Dont Want"}
                    </td>
                    <td>
                      {" "}
                      Beach Access:{" "}
                      {item.facilities.beach_access ? "Want" : "Dont Want"}
                    </td>
                    <td> Additional Note: {item.aditional_note}</td>
                  </tr>
                  {/* <h3>{item.agent_name}</h3>
          <p>{item.duration ? 'Completed' : 'Not completed'}</p> */}
                </div>
              ))}
            </tbody>
          </table>
        </div>
        <div class="container border rounded mt-5 p-3 fw-bold">
          <div class="display-6">Package Reservations</div>
          <table class="table">
            <tbody>
              {dataPackage.map((item) => (
                <div key={item.id}>
                  <tr>
                    <td> Italian Meal Preferences: {item.destination}</td>

                    <td> Price: {item.agent_name}</td>
                    <td> Duration: {item.user_name} Days</td>
                    <td> Airline: {item.user_email}</td>
                    <td> Indian Meal Preferences: {item.checkout_date}</td>

                    <td> Durations: {item.duration}</td>
                    <td> Number of Travellers: {item.number_of_travellers}</td>
                    <td> Price: {item.price}</td>
                    <td> Package Rating: {item.package_rating}</td>
                    <td> honeymoon: {item.speciality.honeymoon}</td>
                    <td> Beach Holiday: {item.speciality.beach_holiday}</td>
                    <td> Wildlife: {item.speciality.wildlife_excursion}</td>
                    <td> Family Holiday: {item.speciality.family_holiday}</td>
                  </tr>
                  {/* <h3>{item.agent_name}</h3>
          <p>{item.duration ? 'Completed' : 'Not completed'}</p> */}
                </div>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Booking;
