import { Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

function NavbarComponent() {

    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Nav className="m-auto">
                        <Nav.Link>
                            <img
                                src="https://vdc.gitam.edu/main_ui/images/logo/GITAM_logo.png"
                                width="300"
                                height="100"
                                className="d-inline-block align-top elogo"
                                alt="gitam-logo"
                            />
                        </Nav.Link>
                        <Nav.Link>
                            <img
                                src="https://vdc.gitam.edu/main_ui/images/logo/red_vdc.png"
                                width="300"
                                height="100"
                                className="d-inline-block align-top elogo"
                                alt="vdc-logo"
                            />
                        </Nav.Link>
                        <Nav.Link>
                            <img
                                src="https://vdc.gitam.edu/eclub_ui/asset/logos/transeclublogo.png"
                                width="300"
                                height="100"
                                className="d-inline-block align-top elogo"
                                alt="eclub-logo"
                            />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;