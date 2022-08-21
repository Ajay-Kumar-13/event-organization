import React from 'react'
import Navbarmain from './Navbarmain';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import CarouselComponent from './CarouselComponent';
import { useEffect, useState } from "react";
import axios from 'axios';
import UserdetailsModel from './UserdetailsModel';
import { RingLoader } from "react-spinners";

function HomeComponent() {

    const [Registered, setRegistered] = useState(false);
    const [user, setUser] = useState("");
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("/auth/login/success")
            .then(resObject => {
                axios.get("/auth/newUser/" + resObject.data.user._json.email)
                    .then(res => {
                        setUser(resObject.data.user._json.email);
                        checkAdmin(resObject.data.user._json.email);
                        setRegistered(res.data.registered);
                        setLoading(false);
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
            {loading ? <RingLoader size={80} loading={loading} color={"#36D7B7"} className="ringLoader"/> :
                <React.Fragment>
                    {Registered ? <Navbarmain /> : null}
                    {Registered ? null : <UserdetailsModel email={user} />}
                    {Registered ? <Jumbotron condition={admin} email={user} /> : null}
                    {Registered ? <CarouselComponent /> : null}
                    {Registered ? <Footer /> : null}
                </React.Fragment>
            }
        </React.Fragment>
    );



}

export default HomeComponent;