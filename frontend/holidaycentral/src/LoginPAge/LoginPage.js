import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-xl">
                    <a class="navbar-brand fw-bold" href="#">
                        <i class="bi bi-square-half"></i> Holiday Central
                    </a>
                </div>
            </nav>

            <div class="container border p-4 mt-5 bg-light col-4 rounded">
                <div class="text-center fw-bold fs-1">User Login</div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>

                    <Link to='/travel/dashboard'>
                        <button type="submit" class="btn btn-primary justify-content-center" >
                            Login
                        </button>
                    </Link>

                </form>
            </div>
        </>
    );
};

export default LoginPage;
