import React, {useState} from "react";
import HeaderAll from "./Headers/HeaderAll";


const Booking = () => {

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
