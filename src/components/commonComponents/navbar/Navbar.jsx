import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-main-container">
         <Container>
            <nav>
                <Link to="/" className="title">
                  HmmEngineering
                </Link>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects">Projects</NavLink>
                  </li>
                  
                </ul>   
            </nav>
          </Container>  
    </div>
  );
};
