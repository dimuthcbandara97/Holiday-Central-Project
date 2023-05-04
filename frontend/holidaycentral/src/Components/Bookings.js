import React, {useState,useEffect} from "react";
import HeaderAll from "./Headers/HeaderAll";
import useFetch from "../hooks/useFetch";
import axios from 'axios';

const Booking = () => {

  const [dataFlight, setDataFlight] = useState([]);
  const [dataHotel, setDataHotel] = useState([]);
  const [dataPackage, setDataPackage] = useState([]);

  useEffect(() => {
    // Cart Flight
    axios.get('localhost:4000/api/checkout/flight')
      .then(response => {
        setDataFlight(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      // Cart Hotel
      // axios.get('localhost:4000/api/checkout/hotel')
      // .then(response => {
      //   setDataHotel(response.data);
      // })
      // .catch(error => {
      //   console.log(error);
      // });
      // // Cart Package
      // axios.get('localhost:4000/api/checkout/package')
      // .then(response => {
      //   setDataPackage(response.data);
      // })
      // .catch(error => {
      //   console.log(error);
      // });
  }, []);
  return (
    <>
      <HeaderAll />
      {dataFlight.map(item => (
        <div key={item.id}>
          <h3>{item.price}</h3>
          <p>{item.duration ? 'Completed' : 'Not completed'}</p>
        </div>
      ))}
      {/* {dataHotel.map(item => (
        <div key={item.id}>
          <h3>{item.room_selection}</h3>
          <p>{item.duration ? 'Completed' : 'Not completed'}</p>
        </div>
      ))}
      {dataFlight.map(item => (
        <div key={item.id}>
          <h3>{item.price}</h3>
          <p>{item.duration ? 'Completed' : 'Not completed'}</p>
        </div>
      ))} */}
      <div class="container m-3 ps-3">
        <div class="display-4 fw-bold text-dark">
          <i class="bi bi-calendar-check me-4"></i>Reservations
        </div>
        <div class="container border rounded mt-5 p-3 fw-bold">
          <div class="display-6">Flight Reservations</div>
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
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container border rounded mt-5 p-3 fw-bold">
          <div class="display-6">Hotel Reservations</div>
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
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container border rounded mt-5 p-3 fw-bold">
          <div class="display-6">Package Reservations</div>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Booking;
