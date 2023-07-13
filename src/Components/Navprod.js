import React from 'react'
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import './Navprod.css'

function Navprod() {
    const NavWrapper = styled.nav`
    background: rgb(210, 128, 52);
    .nav-link {
      color: White !important;
      font-size: 1.3rem;
      text-transform: capitalize;
    }
  `;
  return (
    <div><NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
    <Link to="/">
      <img src={logo} alt="store" className="navbar-brand" height="80"/>
    </Link>
    <ul className="navbar-nav align-items-center">
      <li className="nav-item ml-5">
        <Link to="/Content" className="nav-link">
          products
        </Link>
      </li>
    </ul>
   
    <Link to="/booking" className="ml-auto">
      <ButtonContainer>
        <span className="mr-2">
        <i class="fa fa-book"></i>
        </span>
        my bookings
      </ButtonContainer>
    </Link>
    <div className='new'>
    <Link to="/" className='ml-auto'>
    <ButtonContainer>
        <span  id="logout" className="mr-2">
        logout
        </span>
      </ButtonContainer>
    </Link>
    </div>
  </NavWrapper></div>
  )
}

export default Navprod