import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import Navbarmain from "./Navbarmain";

function UserdetailsModel(props) {


    const [details, setDetails] = useState({
        registration: "",
        year: "",
        email: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails(prev => {
            return ({
                ...prev, [name]: value,
                email: props.email
            })
        })
    }

    const sendDetails = () => {
        axios.post("/auth/newUser/save", details)
            .then(res => {
                if (res.data.success) {
                    window.location.reload();
                }
            })
    }

    const handleSave = () => {
        sendDetails();
    }

    return (
        <React.Fragment>
            <Navbarmain />

            <Form style={{ width: "50%", margin: "auto" }} className="eventForm">
                <Form.Group className="mb-3">
                    <Form.Label>Registration Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Registration Number" name="registration" value={details.registration} onChange={handleChange} />
                    <Form.Text className="text-muted">
                        We'll never share your Details with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" className="text-muted" name="email" value={details.email} placeholder="Enter Email" onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select Year</Form.Label>
                    <Form.Select onChange={handleChange} name="year">
                        <option>--- select year ---</option>
                        <option value="1">First</option>
                        <option value="2">Second</option>
                        <option value="3">Third</option>
                        <option value="4">Fourth</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="outline-success" onClick={handleSave}>Save</Button>
            </Form>
        </React.Fragment>
    )
}

export default UserdetailsModel;