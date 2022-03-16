import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <NavLink to='/'><a class="nav-link" href="#">Home</a></NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to='/onehash'><a class="nav-link" href="#">OneHash</a></NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to='/'><a class="nav-link" href="#">SeveralH</a></NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to='/statistiques'><a class="nav-link" href="#">Statistiques</a></NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>);
}

export default Header;