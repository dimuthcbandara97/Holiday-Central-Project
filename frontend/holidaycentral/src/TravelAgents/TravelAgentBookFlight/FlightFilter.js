import React from "react";
import { Link } from "react-router-dom";
import HeaderAll from "../../Components/HeaderAll";

const BookHotel = () => {
  return (
    <>
      <HeaderAll/>
      <div class="p-5 m-5 border rounded justify-content-center">
        <div class="fs-2 fw-bold justify-content-center my-3">
          Flight Booking
        </div>
        <form class="row g-3">
          {/*Duration */}
          <div class="row justify-content-start mt-3">
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Duration
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>2-4 Hours</option>
                <option>3-6 Hours</option>
                <option>3-8 Hours</option>
              </select>
            </div>

            {/*Price */}

            <div class="col-md-2">
              <label class="form-label">Minimum Price $</label>
              <input
                type="number"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Min"
              />
            </div>

            <div class="col-md-2">
              <label class="form-label">Maximum Price $</label>
              <input
                type="number"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Max"
              />
            </div>

            {/*Airline*/}
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Airline
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>Sri Lanka Airlines</option>
                <option>Emirates</option>
                <option>Air France</option>
              </select>
            </div>

            <div class="col-2 mt-4">
              <button type="submit" class="btn btn-secondary">
                Filter
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="p-5 m-5 border rounded justify-content-start">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Airline</th>
              <th scope="col">Price</th>
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
              <td>
                <div class="d-flex flex-row  mb-3">
                  <div>
                    {/*  */}
                    <Link to="/travel/dashboard/flight/checkout">
                    <button class="btn btn-dark">Book</button>
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookHotel;
