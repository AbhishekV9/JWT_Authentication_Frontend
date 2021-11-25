import React from 'react'
import {Navbar,Container,Nav,Button} from "react-bootstrap";
import { Link } from "react-router-dom";



export const Header = (props) => {

    const handleLogout=()=>{
        localStorage.setItem('token',"");
        localStorage.setItem("isAuthorized",false);
        props.handlesetAuthorization(false);
    }
    
    console.log(props)
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand >Home</Navbar.Brand>
            <Nav className="me-auto">
            {props.authorized? 
            <Button className="log-out" variant="danger" onClick={handleLogout}>Log-Out</Button>
            :<div>
                <Link to="/"  className="link"><span>Sign-Up</span></Link>
                <Link to="/signin" className="link" >Sign-In</Link>
            </div>
            }
            </Nav>
            </Container>
        </Navbar>
        </div>
    )
}
