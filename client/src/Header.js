import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/">GPUCrack</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/onehash">One hash</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Several hash</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/gpucrack"><img src="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png" width="20cm" ></img></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
);
}

export default Header;