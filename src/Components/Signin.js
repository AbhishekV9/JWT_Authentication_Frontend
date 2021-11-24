import React,{useState} from 'react';
import {Form,Button,Alert} from "react-bootstrap";
import {url} from "../Helpers/urls";
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

export const Signin = () => {

    let navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ShowAlert, setShowAlert] = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.get(url+"login",{
           params:{
               Email:Email,
               Password:Password
           }
        }).then(res=>{
            localStorage.setItem('token',res.data.token);
            navigate('/home');
        },(error)=>{
            console.log(error)
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            setEmail("");
            setPassword("");
        })
        
        
    }

    return (
    <div>
        {ShowAlert && <Alert className="alert2" variant="danger">
                Invalid Username or Password, Try Again
        </Alert>}
        <h1 style={{ textAlign:"center", marginTop:"60px"}}>Sign-In</h1>
        <Form className="signup-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  value= {Password} onChange={(e)=>{setPassword(e.target.value)}} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
    )
}
