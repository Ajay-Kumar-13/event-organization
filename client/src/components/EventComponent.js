import React, {useEffect, useState} from "react";
import CardComponent from "./CardComponent";
import axios from "axios";

function EventComponent() {

    const [Events, setEvents] = useState([{
        eventName: "",
        eventDescription: "",
        eventDate: "",
        startTime: "",
        endTime: "",
        price: ""
    }])

    useEffect(() => {
        axios.get("/auth/presentEvents")
            .then(response => {
                setEvents(response.data)
            })
    },  [])

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    {Events && Events.map((event, index) => <CardComponent key={index} id={event._id} eventName={event.eventName} eventDescription={event.eventDescription} startTime={event.startTime} endTime={event.endTime} price={event.price} eventDate={event.eventDate}/>)}
                </div>
            </div>
        </React.Fragment>
    )
}

export default EventComponent;