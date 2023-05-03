import React from "react";
import HeaderBackOffice from "../../HeaderBackOffice";

const Update = () => {
  return (
    <div>
      <HeaderBackOffice />
      <div class="m-5 p-5 border rounded">
        <div class="fs-2 fw-bold justify-content-center my-3">
          Package Details
        </div>
        <form class="row g-3">
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Upload the .csv File Here
            </label>
            <input class="form-control" type="file" id="formFile" />
            <div class="col-2 mt-4">
              <button type="submit" class="btn btn-secondary">
                Upload
              </button>
            </div>
          </div>

          <div class="row justify-content-start mt-3">
            <div class="col-md-5">
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Search for Packages
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Search here to update the Package Details"
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
          Package Details Updation Form
        </div>
        <form class="row g-3">
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Package ID
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                />
              </div>

              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Package Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                />
              </div>

              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Package Rating
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="formGroupExampleInput"
                />
              </div>

              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Duration
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

export default Update;
