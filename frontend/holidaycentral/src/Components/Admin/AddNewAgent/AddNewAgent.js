import React from "react";
import HeaderAdmin from "../../Headers/HeaderAdmin";

const Reset = () => {
  return (
    <div>
      <HeaderAdmin />
      <div class="m-5 p-5 border rounded">
        <div class="fs-2 fw-bold justify-content-center my-3">
          Add New Travel Agent
        </div>
        <form class="row g-3">
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <div class="row g-3">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>

              <div class="row mb-3 mt-3">
                <div class="col">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail3"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div class="row mb-3 mt-3">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail3"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div class="mb-3 mt-3">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="NIC"
                />
              </div>

              <div class="mb-3 mt-3">
                <label for="formGroupExampleInput" class="form-label">
                  Date of Birth
                </label>
                <input
                  id="startDate"
                  class="form-control"
                  type="date"
                  placeholder="Date of Birth"
                />
              </div>

              <div class="col-12 mt-3">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Address"
                />
              </div>

              {/*Update Button */}
              <div class="col-5 mt-4">
                <button type="submit" class="btn btn-secondary">
                  Add Agent
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reset;
