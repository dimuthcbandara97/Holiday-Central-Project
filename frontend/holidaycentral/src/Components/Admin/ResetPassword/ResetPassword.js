import React from "react";
import HeaderAdmin from "../../Headers/HeaderAdmin";

const Reset = () => {
  return (
    <div>
      <HeaderAdmin/>
      <div class="m-5 p-5 border rounded">
        <div class="fs-2 fw-bold justify-content-center my-3">
          Agent Details
        </div>
        <form class="row g-3">
          <div class="row justify-content-start mt-3">
            <div class="col-md-5">
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Search here to update the Agent"
                />
              </div>
              <div class="col-2 mt-4">
                <button type="submit" class="btn btn-secondary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="m-5 p-5 border rounded">
        <div class="fs-2 fw-bold justify-content-center my-3">
          Agent Password Reset{" "}
        </div>
        <form class="row g-3">
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Agent ID
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                />
              </div>

              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Agent Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                />
              </div>

              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Current Password
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                />
              </div>

              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  New Password
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                />
              </div>

              {/*Update Button */}
              <div class="col-2 mt-4">
                <button type="submit" class="btn btn-secondary">
                  Update
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
