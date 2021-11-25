import React,{useState,useEffect} from 'react'
import {Form,Button,Alert} from "react-bootstrap";
import {url} from "../Helpers/urls";
import {getFormBody} from "../Helpers/utils";
import { useNavigate } from 'react-router-dom';

export const Signup = (props) => {

    let navigate = useNavigate();
    if(props.authorized){
        navigate('/home');
    }

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("");
    const [Showalert, setShowalert] = useState(false);
    
    useEffect(()=>{
        localStorage.setItem('token',"");
        localStorage.setItem("isAuthorized",false);
       })

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name.length===0 || email.length===0 || password.length===0 || confirmpassword.length===0){
            alert("Please fill all the credentials");
            return;
        }
        if(password!==confirmpassword){
            setShowalert(true);
            setTimeout(() => {
                setShowalert(false);
            }, (2000));
            setname("");
            setemail("");
            setpassword("");
            setconfirmpassword("")
            return;
        }
        console.log(name,email,password,confirmpassword)
        console.log( getFormBody({ name,email,password}))
        fetch(url+"register",{
            method:"POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', 
              },
              body: getFormBody({ name,email,password}),
        }).then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.registered){
                setname("");
                setemail("");
                setpassword("");
                setconfirmpassword("")
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
                    <Form.Control type="text" placeholder="Enter email" value={name} onChange={(e)=>setname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setpassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
