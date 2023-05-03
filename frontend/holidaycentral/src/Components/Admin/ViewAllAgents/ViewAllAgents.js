import React from "react";
import HeaderAll from "../../HeaderAll";
import HeaderAdmin from "../../HeaderAdmin";

const ViewAllAgents = () => {
  return (
    <>
      <HeaderAdmin />
      <div class="p-5 m-5 border rounded justify-content-start">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">NIC</th>
              <th scope="col">Address</th>
              <th scope="col">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewAllAgents;
