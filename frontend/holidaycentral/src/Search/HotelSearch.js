import React from "react";
import HeaderAll from "../Components/HeaderAll";
import { Link } from "react-router-dom";

const BookHotel = () => {
  return (
    <>
    <HeaderAll/>
    <div class="p-5 m-5 border rounded justify-content-center">
      <div class="fs-2 fw-bold justify-content-center my-3">Hotel Booking</div>
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
        {/*Check in and out dates*/}
        <div class="row justify-content-start mt-3">
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Check In Date
            </label>
            <input id="startDate" class="form-control" type="date" />
          </div>

          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Check Out Date
            </label>
            <input id="startDate" class="form-control" type="date" />
          </div>
        </div>

        {/*Star Rating */}
        <div class="row justify-content-start mt-3">
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Star Rating
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>

        <div class="col-12">
          <Link to='/travel/dashboard/hotel/select'>
          <button type="submit" class="btn btn-secondary">
            Next
          </button>
          </Link>
          
        </div>
      </form>
    </div>
    </>
  );
};

export default BookHotel;
