import React from "react";

import Hotel from "./../../Assets/hotel.png";
import Sunset from "./../../Assets/sunset.png";
import Plane from "./../../Assets/plane.png";

import HeaderBackOffice from "../Headers/HeaderBackOffice";
import { Link } from "react-router-dom";

const BackofficeStaff = () => {
  return (
    <>
      <HeaderBackOffice />
      <div class="container">
        <div class="row  my-5 align-items-center justify-content-center ">
          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-0 bg-secondary bg-opacity-10">
              <div class="card-body text-center py-4">
                <img src={Plane} alt="" width={40} />
                <h4 class="card-title mt-3">Flights</h4>
                <Link to="/backoffice/dashboard/flight">
                  <a href="#" class="btn btn-outline-dark btn-lg mt-3">
                    Enter
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-0 bg-secondary bg-opacity-10">
              <div class="card-body text-center py-4">
                <img src={Hotel} alt="" width={40} />
                <h4 class="card-title mt-3">Hotels</h4>
                <Link to="/backoffice/dashboard/hotel">
                  <a href="#" class="btn btn-outline-dark btn-lg mt-3">
                    Enter
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-0 bg-secondary bg-opacity-10">
              <div class="card-body text-center py-4">
                <img src={Sunset} alt="" width={40} />
                <h4 class="card-title mt-3">Packages</h4>
                <Link to="/backoffice/dashboard/package">
                  <a href="#" class="btn btn-outline-dark btn-lg mt-3">
                    Enter
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackofficeStaff;
