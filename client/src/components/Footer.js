import React from "react";

function Footer() {
    return (
        <div className="footer" style={{padding:"2% 0"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-4 home footerBlock">
                        <h3 className="header" style={{color:'whitesmoke'}}>Links</h3>
                        <ul style={{listStyle:"none", textAlign:"left", padding:0}}>
                            <li><a>Home</a></li>
                            <li><a>Register for Event</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>  
                    <div className="col-12 col-sm-4 home footerBlock">
                        <h3 className="header" style={{color:"whitesmoke"}}>Our Address</h3>
                        <ul style={{listStyle:"none", textAlign:"left", padding:0}}>
                            <li>GITAM Institute of Technology</li>
                            <li>Venture Discovery</li>
                            <li>Rushikonda, Vishakapatnam</li>
                            <li>+12 34567890</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center footerBlock">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 footerBlock" style={{textAlign:"center"}}>
                        <h4 className="home">Made with ♥ by Team VDC</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;