import React from "react";

import Plane from "../../Assets/plane.png";
import Hotel from "../../Assets/hotel.png";
import Sunset from "../../Assets/sunset.png";
import HeaderAll from "../Headers/HeaderAll";
import { Link } from "react-router-dom";

const TravelAgentMenu = () => {
  return (
    <>
      <HeaderAll />

      <div class="container">
        <div class="row  my-5 align-items-center justify-content-center ">
          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-0 bg-secondary bg-opacity-10">
              <div class="card-body text-center py-4">
                <img src={Plane} alt="" width={40} />
                <h4 class="card-title mt-3">Flight Ticket Reservation</h4>
                <Link
                  to="/travel/dashboard/flight"
                  class="btn btn-outline-dark btn-lg mt-3"
                >
                  Book Your Flight
                </Link>
              </div>
            </div>
          </div>

          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-0 bg-secondary bg-opacity-10">
              <div class="card-body text-center py-4">
                <img src={Hotel} alt="" width={40} />
                <h4 class="card-title mt-3">Hotel Reservation</h4>
                <Link
                  to="/travel/dashboard/hotel"
                  class="btn btn-outline-dark btn-lg mt-3"
                >
                  Book Your Hotel
                </Link>
              </div>
            </div>
          </div>

          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-0 bg-secondary bg-opacity-10">
              <div class="card-body text-center py-4">
                <img src={Sunset} alt="" width={40} />
                <h4 class="card-title mt-3">Holiday Packages</h4>
                <Link
                  to="/travel/dashboard/package"
                  class="btn btn-outline-dark btn-lg mt-3"
                >
                  Book Your Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelAgentMenu;
