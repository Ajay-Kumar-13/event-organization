import React, { useState } from "react";
import { Form, FormControl, FormGroup, FormLabel, Button, InputGroup } from "react-bootstrap";
import Navbarmain from "./Navbarmain";
import DatePicker from "react-datepicker";
import { withFormik } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css"
import moment from "moment";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function CreateEvent() {
    const navigate = useNavigate();
    const [validate, setValidate] = useState(false);
    const [dispatchStartTime, setDispatchStartTime] = useState(moment());
    const [dispatchEndTime, setDispatchEndTime] = useState(moment());
    const [eventDetails, setEventDetails] = useState({
        eventName: "",
        eventDescription: "",
        eventDate: "",
        startTime: "",
        endTime: "",
        price: "",
    });
    const [Image, setImage] = useState();

    const handleStartValueChange = value => {
        setDispatchStartTime(value);
        setEventDetails(prev => {
            return ({
                ...prev, startTime: value.format("hh:mm")
            })
        })
    }

    const handleEndValueChange = value => {
        setDispatchEndTime(value);
        setEventDetails(prev => {
            return ({
                ...prev, endTime: value.format("hh:mm")
            })
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails(prev => {
            return ({
                ...prev, [name]: value
            })
        })
    }

    const handleDate = (event) => {
        var month = (parseInt(event.getMonth()) + 1).toString();
        var ed = event.getDate() + "/" + month + "/" + event.getFullYear();
        setEventDetails(prev => {
            return ({
                ...prev,
                eventDate: ed
            })
        })
    }

    const submitData = () => {
        axios.post("/auth/createEvent", eventDetails)
            .then(response => {
                response.data.success ? navigate("/register") : window.location.reload();
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidate(true);
        } else {
            submitData();
        }
    }


    const handleUpload = (name) => {

        const data = new FormData();
        data.append("name", name)
        data.append("file", Image)

        axios.post("/upload", data)
    }

    const handleImage = (e) => {

        setImage(e.target.files[0]);

    }

    const today = new Date();

    const App = props => {
        const {
            values,
            touched,
            errors,
            handleSubmit,
            setFieldValue,
            setFieldTouched
        } = props;

        return (
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="validationFormik03">
                        <Form.Label>Date</Form.Label>
                        <DatePicker
                            selected={values.date}
                            minDate={today}
                            onChange={(e) => {
                                setFieldValue('date', e);
                                setFieldTouched('date')
                                    .then(handleDate(e))
                            }}
                            className="form-control"
                            value={eventDetails.eventDate}
                        />
                        {touched.date && !!errors.date && errors.date}
                    </Form.Group>
                </Form>
            </div>
        );
    };

    const ValidatedForm = withFormik({
        mapPropsToValues: () => ({
            date: null
        }),

        // Custom sync validation
        validate: values => {
            const errors = {};

            if (!values.date) {
                errors.date = "Please select a date";
            }

            return errors;
        },

        handleSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 1000);
        },

        displayName: "BasicForm"
    })(App);

    return (
        <React.Fragment>
            <Navbarmain />
            <div className="container">
                <Form className="eventForm" noValidate validated={validate} onSubmit={handleSubmit}>
                    <FormGroup className="mb-3" controlId="validationCustom01">
                        <FormLabel>Name</FormLabel>
                        <FormControl required placeholder="Enter Event Name" onChange={handleChange} name="eventName" value={eventDetails.name}></FormControl>
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="validationCustom02">
                        <FormLabel>Description</FormLabel>
                        <InputGroup hasValidation >
                            <FormControl
                                required
                                as="textarea"
                                rows="3"
                                placeholder="Enter Event Description"
                                onChange={handleChange}
                                name="eventDescription"
                                value={eventDetails.description}>
                            </FormControl>
                            <FormControl.Feedback type="invalid">Please Enter the Event Name</FormControl.Feedback>
                        </InputGroup>
                    </FormGroup>
                    <div className="row mb-3">
                        <div className="col-6">
                            <ValidatedForm />
                        </div>
                        <div className="col-3">
                            <FormLabel>Start Time</FormLabel>
                            <TimePicker
                                value={dispatchStartTime}
                                onChange={handleStartValueChange}
                                showSecond={false}
                                allowEmpty
                                className="form-control"
                                name="startTime"
                            />
                        </div>
                        <div className="col-3">
                            <FormLabel>End Time</FormLabel>
                            <TimePicker
                                value={dispatchEndTime}
                                onChange={handleEndValueChange}
                                showSecond={false}
                                allowEmpty
                                className="form-control"
                                name="endTime"
                            />
                        </div>
                    </div>
                    <FormGroup className="mb-3">
                        <FormLabel>Price</FormLabel>
                        <FormControl required placeholder="Price of the Pass" name="price" onChange={handleChange} value={eventDetails.price}></FormControl>
                    </FormGroup>
                    <div className="row mb-3" style={{ position: "relative" }} >
                        <div className="col-md-11">
                            <FormLabel>Select Image</FormLabel>
                            <FormControl required id="image" type="file" name="testImage" onChange={handleImage}></FormControl>
                        </div>
                        <div className="col-md-1">
                            <Button variant="outline-dark" style={{ bottom: 0, position: "absolute" }} onClick={() => handleUpload(eventDetails.eventName)} >Upload</Button>
                        </div>
                    </div>

                    <Button variant="outline-success" style={{ margin: "20px 20px 20px 0px" }} type="submit">Create Event</Button>
                    <Button variant="outline-danger" style={{ margin: "20px" }} onClick={() => navigate("/home")}>Cancel Event</Button>

                </Form>
            </div>
        </React.Fragment>
    )
}

export default CreateEvent;


// https://codesandbox.io/s/l72j3xz8lq?file=/src/index.js:274-1157
// https://codesandbox.io/s/xepzr?file=/src/App.js
// https://www.youtube.com/watch?v=KoWTJ5XiYm4