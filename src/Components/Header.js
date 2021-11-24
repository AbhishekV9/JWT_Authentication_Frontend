import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap";
import { Link } from "react-router-dom";



export const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand >Home</Navbar.Brand>
            <Nav className="me-auto">
            <Link to="/"  className="link"><span>Sign-Up</span></Link>
            <Link to="/signin" className="link" >Sign-In</Link>
            </Nav>
            </Container>
        </Navbar>
        </div>
    )
}
