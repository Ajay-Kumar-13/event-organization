import React, { useEffect, useState } from "react";
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

function Navbarmain() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [show, setShow] = useState(false);
    const [regNo, setregNo] = useState("");
    const [query, setQuery] = useState({
        RegistrationNumber: "",
        Name: "",
        Query: "",
    });

    const handleClose = () => {
        query.RegistrationNumber = "";
        query.Name = "";
        query.Query="";
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuery(prev => {
            return ({
                ...prev, [name]: value,
                RegistrationNumber: regNo
            })
        })
    }

    const handleSend = () => {
        axios.post("/auth/newQuery/save", query)
            .then(res => {
                if(res.data.success) {
                    window.location.reload();
                }
            })
    }

    useEffect(() => {
        axios.get("/auth/login/success")
            .then(res => {
                axios.get("/auth/getRegno/" + res.data.user._json.email)
                    .then(response => {
                        setregNo(response.data.regNo);
                    })
            })
    }, [])

    return (
        <Navbar color="light" light >
            <div>
                <NavbarToggler className="toogleButton" onClick={() => { setIsOpen(!isOpen) }} />
                <NavbarBrand>
                    <img
                        src="https://vdc.gitam.edu/eclub_ui/asset/logos/transeclublogo.png"
                        className="d-inline-block align-top elogo"
                        alt="eclub-logo"
                        width="350"
                        height="100"
                    />
                </NavbarBrand>
            </div>
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="home" href='/home'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="home" href="/register">Carnival Pass</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="home" onClick={handleShow}>Contact Us</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            <div style={{ position: "absolute", right: 0, top: 0 }}>
                <img
                    src="https://vdc.gitam.edu/main_ui/images/logo/GITAM_logo.png"
                    width="300"
                    height="100"
                    className="d-inline-block align-top elogo ms-auto"
                    alt="gitam-logo"
                />
            </div>
            <div style={{ position: "absolute", right: 250, top: 0 }}>
                <img
                    src="https://vdc.gitam.edu/main_ui/images/logo/red_vdc.png"
                    width="300"
                    height="100"
                    className="d-inline-block align-top elogo ms-auto"
                    alt="vdc-logo"
                />
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Registration Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Registration Number" name="RegistrationNumber" value={query.RegistrationNumber} onChange={handleChange} />
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name" name="Name" value={query.Name} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your Details with anyone else.
                            </Form.Text><br />
                            <Form.Label>Query</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Query" name="Query" value={query.Query} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-success" onClick={handleSend}>Send</Button>
                </Modal.Footer>
            </Modal>
        </Navbar>
    )
}

export default Navbarmain;