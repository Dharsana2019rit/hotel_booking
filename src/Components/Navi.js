import React from "react";
import { Nav, Navbar,Offcanvas } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import './navi.css'
import logo from '../logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";


  function Navi(){
    
    return(
        <div>
        <Navbar bg="cl" variant="dark" fixed="top"expand={false}>
          <Navbar.Brand>
          <img src={logo} width={80} height={60}/>
              <span className="tile">Hotelbay</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="Offcanvas-Title">
       
          Menu
          </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="Offcanvas-body" >
          <Nav>
              <NavLink className="nav-link" to="/home" exact>
                    <div className="button">
                      <p id="drop">Home</p>
                      </div>
                  </NavLink>
                  <NavLink className="nav-link" to="/registration" exact>
                  <div className="button">

                  <p id="drop">Registration</p>
                  </div>
                  </NavLink>

                  <NavLink className="nav-link" to="/login" exact>
                  <div className="button">

                  <p id="drop">Login</p>
                  </div>
                  </NavLink>
                  <NavLink className="nav-link" to="/Contact" exact>
                  <div className="button">

                  <p id="drop">Contact</p>
                  </div>
                  </NavLink>
                  <NavLink className="nav-link" to="/about" exact>
                  <div className="button">

                  <p id="drop">About</p>
                  </div>
                  </NavLink>
            
          
          </Nav>
          </Offcanvas.Body>
    </Navbar.Offcanvas>
          
        </Navbar>
        
</div>
    );
}
export default Navi;