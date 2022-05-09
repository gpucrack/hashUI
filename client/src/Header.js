import React from "react";
import './Header.css';



function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/">GPUCrack</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/onehash">One hash</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/severalhash">Several hash</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/gpucrack"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="25cm" ></img></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
);
}

export default Header;