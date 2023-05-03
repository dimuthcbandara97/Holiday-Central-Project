import React from "react";
import { Link } from "react-router-dom";

function HeaderAdmin() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-xl">
        <a class="navbar-brand fw-bold" href="#">
          <i class="bi bi-square-half"></i> Holiday Central
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse  justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav fw-normal">
            <li class="nav-item mx-2">
              <a class="nav-link text-secondary" href="#">
                <i class="bi bi-people"></i> Travel Agents
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link text-secondary" href="#">
                <i class="bi bi-gear"></i> Profile
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link text-secondary" href="#">
                <i class="bi bi-box-arrow-right"></i> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderAdmin;
