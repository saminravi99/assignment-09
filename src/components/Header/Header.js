import "./Header.css";
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="nav-bar">
            <Navbar expand="lg">
                <Container>
                    <Link className="link" to="/">
                        <h1 className="logo-text">Food<span>DX</span> </h1>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/">
                            HOME
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/reviews">
                            REVIEWS
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/dashboard">
                            DASHBOARD
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/blogs">
                            BLOGS
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/about">
                            ABOUT US
                        </NavLink>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;