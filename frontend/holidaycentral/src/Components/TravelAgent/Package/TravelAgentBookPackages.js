import React from "react";
import HeaderAll from "../../Headers/HeaderAll";
import { Link } from "react-router-dom";

const BookPackages = () => {
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
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>Colombo</option>
                <option>Negombo</option>
                <option>Galle</option>
              </select>
            </div>
          </div>

          {/*Duration*/}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Duration
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>1 Week</option>
                <option>2 Weeks</option>
                <option>3 Weeks</option>
                <option>4 Weeks</option>
              </select>
            </div>
          </div>

          {/*Number of Travelers */}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Number of Travelers
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
          </div>

          {/*Speciality*/}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Speciality
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>Honeymoon</option>
                <option>Beach Holiday</option>
                <option>Wildlife Excursion</option>
                <option>Family Holiday</option>
              </select>
            </div>
          </div>

          <div class="col-12">
            <Link to="/travel/dashboard/package/select">
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

export default BookPackages;
