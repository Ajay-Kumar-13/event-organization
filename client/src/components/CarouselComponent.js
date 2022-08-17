import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselComponent() {
    return (
        <Carousel className="Carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100 carouselImage"
                    alt="Workshop"
                    src="https://www.highspot.com/wp-content/uploads/Hackathon.png"
                />
                <Carousel.Caption>
                    <h3 className="carouselTitle" style={{color:'#1b1a17'}}>Workshop</h3>
                    <p className="carouselText" style={{color:'#39311d'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carouselImage"
                    alt="Cultural Night Image"
                    src="culturalnight.png"
                    // style={{ opacity: "0.7" }}
                />
                <Carousel.Caption>
                    <h3 className="carouselTitle">Cultural Night</h3>
                    <p className="carouselText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 carouselImage"
                    alt="Concert"
                    src="concert.png"
                    // style={{ opacity: "0.7" }}
                />
                <Carousel.Caption>
                    <h3 className="carouselTitle">Concert</h3>
                    <p className="carouselText">Lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent;