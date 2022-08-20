import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

function NavbarComponent() {

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        function handleResize() {
            console.log(window.innerWidth);
            if (window.innerWidth < 450) {
                console.log("Came01");
                document.getElementById("navbarContainer02").classList.remove("m-auto");
                document.getElementById("navbarContainer01").classList.remove("container");
            } else {
                document.getElementById("navbarContainer02").classList.add("m-auto");
                document.getElementById("navbarContainer01").classList.add("container");
            }
        }
    })

    return (
        <React.Fragment>
    
            <div className="container">
                <div className="row navbarRow">
                    <div className="col-md-4 col-6">
                        <img
                            src="https://vdc.gitam.edu/main_ui/images/logo/GITAM_logo.png"
                            width="300"
                            height="100"
                            className="d-inline-block align-top img"
                            alt="gitam-logo"
                        />
                    </div>
                    <div className="col-md-4 col-6 d-none d-sm-none d-md-block ">
                        <img
                            src="https://vdc.gitam.edu/main_ui/images/logo/red_vdc.png"
                            width="300"
                            height="100"
                            className="d-inline-block align-top img"
                            alt="vdc-logo"
                        />
                    </div>
                    <div className="col-md-4 col-6">
                        <img
                            src="https://vdc.gitam.edu/eclub_ui/asset/logos/transeclublogo.png"
                            width="300"
                            height="100"
                            className="d-inline-block align-top img"
                            alt="eclub-logo"
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavbarComponent;