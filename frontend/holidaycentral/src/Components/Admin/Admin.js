import React from "react";

import AddUser from "./../../Assets/add-user.png";
import Lock from "./../../Assets/padlock.png";
import HeaderAll from "../HeaderAll";
import HeaderAdmin from "../HeaderAdmin";

const Admin = () => {
  return (
    <>
      <HeaderAdmin />

      <div class="container">
        <div class="row  my-5 align-items-center justify-content-center ">
          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-0 bg-secondary bg-opacity-10">
              <div class="card-body text-center py-4">
                <img src={AddUser} alt="" width={40} />
                <h4 class="card-title mt-3">Add Travel Agents</h4>
                <a href="#" class="btn btn-outline-dark btn-lg mt-3">
                  Add Now
                </a>
              </div>
            </div>
          </div>

          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-0 bg-secondary bg-opacity-10">
              <div class="card-body text-center py-4">
                <img src={Lock} alt="" width={40} />
                <h4 class="card-title mt-3">Reset Password</h4>
                <a href="#" class="btn btn-outline-dark btn-lg mt-3">
                  Reset Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
