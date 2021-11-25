import React,{useState,useEffect} from 'react';
import {Form,Button,Alert} from "react-bootstrap";
import {url} from "../Helpers/urls";
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

export const Signin = (props) => {
    let navigate = useNavigate();

    if(props.authorized){
        navigate('/home');
    }
    
   useEffect(()=>{
    localStorage.setItem('token',"");
    localStorage.setItem("isAuthorized",false);
   })
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [ShowAlert, setShowAlert] = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.get(url+"login",{
           params:{
               email:email,
               password:password
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
            setemail("");
            setpassword("");
        })
        
        
    }

    return (
    <div>
        {ShowAlert && <Alert className="alert2" variant="danger">
                Invalid Username or password, Try Again
        </Alert>}
        <h1 style={{ textAlign:"center", marginTop:"60px"}}>Sign-In</h1>
        <Form className="signup-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  value= {password} onChange={(e)=>{setpassword(e.target.value)}} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
    )
}
