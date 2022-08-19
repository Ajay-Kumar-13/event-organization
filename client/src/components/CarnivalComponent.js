import React from "react";
import Navbarmain from "./Navbarmain";
import EventComponent from "./EventComponent";
import {useLocation} from "react-router-dom";

function CarnivalComponent() {
    const location = useLocation();
    return (
        <React.Fragment>
            <div className="Events">
                <Navbarmain />
                <EventComponent email={location.state ? location.state.email : null}/>
            </div>
        </React.Fragment>
    )
}

export default CarnivalComponent;