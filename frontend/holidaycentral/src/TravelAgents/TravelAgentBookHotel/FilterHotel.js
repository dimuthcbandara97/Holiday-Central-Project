import React from "react";
import HeaderAll from "../../Components/HeaderAll";

const BookHotel = () => {
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
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
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
              />
            </div>

            <div class="col-md-2">
              <label class="form-label">Maximum Price</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Max"
              />
            </div>

            {/*Facilities*/}
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Facilities
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>Pool</option>
                <option>Kids Play Area</option>
                <option>Beach Access</option>
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
              <th scope="col">Hotel Name</th>
              <th scope="col">Price</th>
              <th scope="col">Facilities</th>
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
                    <button class="btn btn-dark">Book</button>
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