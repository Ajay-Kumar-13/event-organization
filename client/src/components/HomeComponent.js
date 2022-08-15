import React from 'react'
import Navbarmain from './Navbarmain';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import CarouselComponent from './CarouselComponent';
import { useEffect, useState } from "react";
import axios from 'axios';
import UserdetailsModel from './UserdetailsModel';

function HomeComponent() {

    const [Registered, setRegistered] = useState(false);
    const [user, setUser] = useState("");
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        axios.get("/auth/login/success")
            .then(resObject => {
                axios.get("/auth/newUser/" + resObject.data.user._json.email)
                    .then(res => {
                        setUser(resObject.data.user._json.email);
                        checkAdmin(resObject.data.user._json.email);
                        setRegistered(res.data.registered);
                    });
            })
            .catch(err => console.log(err))
    }, [])

    function checkAdmin(email) {
        var domain = email.split("@");
        if (domain[1] === "gmail.com") {
            setAdmin(true);
        }
    }


    return (
        <React.Fragment>
            {Registered ?<Navbarmain /> : null}
            {Registered ? null : <UserdetailsModel email={user}/>}
            {Registered ? <Jumbotron condition={admin}/> : null}
            {Registered ? <CarouselComponent /> : null}
            {Registered ? <Footer /> : null}
        </React.Fragment>
    );



}

export default HomeComponent;