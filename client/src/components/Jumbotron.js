import React from "react";
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function Jumbotron(props) {
    const navigate = useNavigate();
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="row" style={{alignItems:"center"}}>
                    <div className="col-12 col-lg-6">
                        <h1 className="header">E-CLUB</h1>
                        <h3 className="header">Unleash your Entreprenerial Spirit</h3>
                        <p className="home">{window.innerWidth}+Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="col-12 col-lg-3 d-none d-sm-none d-md-block" style={{textAlign: 'center'}}>
                        <img
                            src="carnival.png"
                            className="d-inline-block align-top elogo"
                            width="300"
                            alt="carnival-logo"
                            style={{left:0}}
                        />
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="row">
                            <div className="col-12">
                                <Button variant="outline-dark" style={{padding:"15px", width:"100%", fontWeight:"bold"}} onClick={() => navigate('/register', {state: {id:1, email: props.email}})}>Register for Event</Button>
                            </div>
                        </div><br></br>
                        {props.condition ? <div className="row">
                            <div className="col-12">
                            <Button variant="outline-dark" style={{padding:"15px", width:"100%", fontWeight:"bold"}} onClick={() => navigate('/createEvent')}>Create a Event</Button>
                            </div>
                        </div> : null}
                                             
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;