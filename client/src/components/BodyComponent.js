import { Button } from "react-bootstrap";
import React from "react";

function BodyComponent() {

    function googleAuth() {
        window.open("http://localhost:3001/auth/google", "_self");
    }

    return (
        <div className="about">
            <img
                src="carnival.png"
                width="500"
                height="500"
                className="d-inline-block align-top"
                alt="e-club logo"
                id="mainLogo"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Button variant="danger" className="login" onClick={googleAuth}>Login with Gitam</Button>
        </div>
    )
}

export default BodyComponent;

// 3046
// akhilsai@123