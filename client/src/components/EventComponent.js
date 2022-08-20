import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import axios from "axios";
import { RingLoader } from "react-spinners";

function EventComponent(props) {

    const [Events, setEvents] = useState([{
        eventName: "",
        eventDescription: "",
        eventDate: "",
        startTime: "",
        endTime: "",
        price: ""
    }])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("/auth/presentEvents")
            .then(response => {
                setEvents(response.data)
                setLoading(false);
            })
    }, [])

    return (
        <React.Fragment>
            {loading ? <RingLoader loading={loading} color="#36D7B7" size={50} className="ringLoaderCard" /> :
                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            {Events && Events.map((event, index) => <CardComponent key={index} id={event._id} eventName={event.eventName} eventDescription={event.eventDescription} startTime={event.startTime} endTime={event.endTime} price={event.price} eventDate={event.eventDate} email={props.email} />)}
                        </div>
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default EventComponent;