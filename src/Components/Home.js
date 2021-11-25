import React,{useEffect} from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import {url} from "../Helpers/urls";


export const Home = (props) => {
    let navigate = useNavigate();
   
    useEffect(() => {
        const token=localStorage.getItem('token');
        if(token===""){
            navigate('/signin');
            return;
        }
        const config={
            headers:{
                Authorization: 'Bearer ' + token,
            }
            
        }
        axios.get(url+'authenticate',config)
        .then(res=>{
            if(res.data.isAuthorized){
                localStorage.setItem("isAuthorized",true);
                props.handlesetAuthorization(true);
            }
        },(error)=>{
            navigate('/signin');
            localStorage.setItem('token',"");
            localStorage.setItem("isAuthorized",false);
            console.log(error);
        });

    }, [navigate,props])
    return (
        <div>
            <h1 className="welcome" >Welcome You are authorized now</h1>
            <img className="happy" src="https://www.introtodigital.com/wp-content/uploads/2020/01/Happy-PC-user.png" alt="happy user"/>
        </div>
    )
}
