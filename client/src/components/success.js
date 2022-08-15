import React from "react";
import Navbarmain from "./Navbarmain";
import { Button } from "react-bootstrap"
import {useNavigate} from "react-router-dom"

function Success() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <Navbarmain />
            <div style={{ backgroundColor: "#EBECF0", height: "30%", color: "black", padding: "7%" }}>
                <div className="container">
                    <h1>Hurray! you have successfully purchased your pass for the Event</h1>
                    <h2>Your E-mail has been recorded!</h2>
                    <h2>Thank you for registering and Enjoy your Day!</h2>
                    <a href="#">View Details</a>
                </div>
                <div className="container" style={{marginTop: "50px"}}>
                    <Button variant="outline-secondary" onClick={() => navigate("/")}>LOGOUT</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Success;