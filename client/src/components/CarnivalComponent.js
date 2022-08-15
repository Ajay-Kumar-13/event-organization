import React from "react";
import Navbarmain from "./Navbarmain";
import EventComponent from "./EventComponent";

function CarnivalComponent() {
    return (
        <React.Fragment>
            <div className="Events">
                <Navbarmain />
                <EventComponent />
            </div>
        </React.Fragment>
    )
}

export default CarnivalComponent;