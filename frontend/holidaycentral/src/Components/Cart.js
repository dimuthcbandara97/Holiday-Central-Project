import React, { useState, useEffect } from "react";
import HeaderAll from "./Headers/HeaderAll";
import axios from "axios";
import { Link } from "react-router-dom";
import qs from "qs";
import request from "superagent";

const Cart = () => {
  const [dataFlight, setDataFlight] = useState([]);
  const [dataHotel, setDataHotel] = useState([]);
  const [dataPackage, setDataPackage] = useState([]);

  useEffect(() => {
    // Cart Flight
    axios
      .get("http://localhost:4000/api/cart/flight")
      .then((response) => {
        setDataFlight(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // Cart Hotel
    axios
      .get("http://localhost:4000/api/cart/hotel")
      .then((response) => {
        setDataHotel(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // // Cart Package
    axios
      .get("http://localhost:4000/api/cart/package")
      .then((response) => {
        setDataPackage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    const data = { id };
    axios({
      method: "DELETE",
      url: `http://localhost:4000/api/checkout/flight/${id}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    })
      .then((response) => {
        console.log(response);
        setDataFlight(dataFlight.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //checkout the carted hotels
  const checkoutHotel = (e) => {
    //get data
    const id = e._id;
    const destination = e.destination;
    const check_in_date = e.check_in_date;
    const check_out_date = e.check_out_date;
    const star_rating = e.star_rating;
    const room_selection = e.room_selection;
    const board_basis = e.board_basis;
    const pricing = e.pricing;
    const pool = e.facilities.pool;
    const kids_play_area = e.facilities.kids_play_area;
    const beach_access = e.facilities.beach_access;
    const agent_name = e.agent_name;
    const user_email = e.user_email;
    const checkout_date = e.checkout_date;
    const aditional_note = e.additional_note;

    //append data
    const data = new URLSearchParams();

    // destination
    data.append("destination", destination);
    // check_in_date
    data.append("check_in_date", check_in_date);
    // check_out_date
    data.append("check_out_date", check_out_date);
    // bill checkout_date
    data.append("checkout_date", checkout_date);
    // star_rating
    data.append("star_rating", star_rating);
    // room_selection
    data.append("room_selection", room_selection);
    // board_basis
    data.append("board_basis", board_basis);
    // pricing
    data.append("pricing", pricing);
    // pool
    data.append("pool", pool);
    // kids_play_area
    data.append("kids_play_area", kids_play_area);
    // beach_access
    data.append("beach_access", beach_access);
    // agent_name
    data.append("agent_name", agent_name);
    // user_email
    data.append("user_email", user_email);
    // aditional_note
    data.append("aditional_note", aditional_note);

    console.log(data);

    //send data as "booked"

    request
      .post("http://localhost:4000/api/checkout/hotel")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("Access-Control-Allow-Origin", "*")
      .send(data)
      .then((response) => {
        console.log(response.body);

        alert("Data sent successfully");
        window.location = "http://localhost:3000/travel/dashboard";
      })
      .catch((error) => {
        console.log(error);
        alert("Unsuccessfull Atempt! Try again!" + error);
      });

    //delete data from cart

   
  };

  return (
    <>
      <HeaderAll />

      <div class="container m-3 ps-3">
        <div class="display-4 fw-bold text-dark">
          <i class="bi bi-calendar-check me-4"></i>View My Cart
        </div>
        <div class="container border rounded mt-5 p-3 fw-bold">
          <div class="display-6">Flight Cart</div>
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
                <th scope="col"></th>
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
                  <td>
                    {/* <Link to="/travel/success"> */}
                    <button
                      class="btn btn-dark"
                      onClick={() => handleDelete(item.id)}
                    >
                      Book
                    </button>
                    {/* </Link> */}
                  </td>
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
          <div class="display-6">Hotel Cart</div>
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataHotel.map((hotelItem) => (
                <tr key={hotelItem.id}>
                  <td> {hotelItem.agent_name}</td>
                  <td> {hotelItem.user_email}</td>
                  <td> {hotelItem.destination}</td>
                  <td> {hotelItem.check_out_date}</td>
                  <td> {hotelItem.star_rating}</td>
                  <td> {hotelItem.pricing}</td>

                  <td>{hotelItem.room_selection} </td>
                  <td>{hotelItem.board_basis}</td>

                  <td>
                    {hotelItem.facilities.pool ? "Available" : "Not Available"}
                  </td>
                  <td>
                    {hotelItem.facilities.kids_play_area
                      ? "Available"
                      : "Not Available"}
                  </td>
                  <td>
                    {hotelItem.facilities.beach_access
                      ? "Available"
                      : "Not Available"}
                  </td>
                  <td> {hotelItem.aditional_note}</td>
                  <td>
                    <button
                      class="btn btn-dark"
                      onClick={() => checkoutHotel(hotelItem)}
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="container border rounded mt-5 p-3 fw-bold">
          <div class="display-6">Package Cart</div>
          <table class="table table-bordered border-primary text-center">
            <thead>
              <tr class="table-success">
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataPackage.map((item) => (
                <tr key={item.id}>
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
                  <Link to="/travel/success">
                    <button class="btn btn-dark">Book</button>
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
