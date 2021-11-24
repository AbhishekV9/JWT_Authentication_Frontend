import React,{useState} from 'react'
import {Form,Button,Alert} from "react-bootstrap";
import {url} from "../Helpers/urls";
import {getFormBody} from "../Helpers/utils";
import { useNavigate } from 'react-router-dom';

export const Signup = () => {

    let navigate = useNavigate();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("")
    const [Confirmpassword, setConfirmpassword] = useState("");
    const [Showalert, setShowalert] = useState(false);
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Password!==Confirmpassword){
            setShowalert(true);
            setTimeout(() => {
                setShowalert(false);
            }, (2000));
            setName("");
            setEmail("");
            setPassword("");
            setConfirmpassword("")
            return;
        }
        fetch(url+"register",{
            method:"POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', 
              },
              body: getFormBody({ Name,Email,Password}),
        }).then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.registered){
                navigate('/signin');
            }
        });

    }
    return (
        <div>
            {Showalert && <Alert className="alert" variant="danger">
                Password Does,t Match
            </Alert>}
            <h1 style={{ textAlign:"center", marginTop:"30px"}}>Sign-Up</h1>
            <Form className="signup-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={Name} onChange={(e)=>setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={Email} onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  value={Password} onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  value={Confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
