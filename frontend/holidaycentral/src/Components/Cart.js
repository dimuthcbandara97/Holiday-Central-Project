import React from "react";
import HeaderAll from "./Headers/HeaderAll";

const Cart = () => {
  return (
    <>
      <HeaderAll />
      <div class="container m-3 ps-3">
        <div class="display-4 fw-bold text-dark">
          <i class="bi bi-bag-check me-4"></i>Cart
        </div>
        <div class="container border rounded mt-5 p-3 fw-bold">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Hotel Name</th>
                <th scope="col">Price</th>
                <th scope="col">Star Rating</th>
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
                <td>@mdo</td>
                <td>
                  <button class="btn btn-secondary">Check Out</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
