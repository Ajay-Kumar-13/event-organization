import React from "react";
import { Card } from "react-bootstrap";
import GooglePayButton from "@google-pay/button-react";
import {useNavigate} from "react-router-dom";

function CardComponent(props) {

    const navigate = useNavigate();
    return (
        <div className="col-12 col-sm-6">
            <Card style={{ width: '18rem', backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
                <Card.Body>
                    <Card.Img src={`${props.eventName}.png`} style={{ transform: 'scale(1)' }} />
                    <Card.Title>{props.eventName}</Card.Title>
                    <Card.Text>
                        <p>{props.eventDescription}</p>
                        <p>Timing: {props.startTime}-{props.endTime}</p>
                        <p>Date: {props.eventDate}</p>
                        <p>Price: {props.price}/-</p>
                    </Card.Text>
                    {/* <Button variant="outline-success">Proceed to Payment</Button> */}
        
                    <GooglePayButton
                        environment="TEST"
                        paymentRequest={{
                            apiVersion: 2,
                            apiVersionMinor: 0,
                            allowedPaymentMethods: [
                                {
                                    type: 'CARD',
                                    parameters: {
                                        allowedAuthMethods:["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                        allowedCardNetworks: ["MASTERCARD", "VISA"],
                                        billingAddressRequired: false
                                    },
                                    tokenizationSpecification: {
                                        type: "PAYMENT_GATEWAY",
                                        parameters: {
                                            gateway: "example",
                                            gatewayMerchantId: "exampleMerchantId"
                                        },
                                    },
                                },
                            ],
                            merchantInfo: {
                                merchantId: "BCR2DN4T5S5LPQKV",
                                merchantName: "Event Organization"
                            },
                            transactionInfo: {
                                totalPriceStatus: "FINAL",
                                totalPriceLabel: "Total",
                                totalPrice: "10",
                                currencyCode: "INR",
                                countryCode: "US"
                            },
                            shippingAddressRequired: false,
                            callbackIntents: ["PAYMENT_AUTHORIZATION"]    
                        }}
                        
                        onLoadPaymentData= {paymentRequest => {
                            console.log("paymentRequest", paymentRequest)
                        }}
                        onPaymentAuthorized= {paymentData => {
                            console.log("paymentData", paymentData);
                            navigate("/success");
                            return {
                                transactionState: "SUCCESS"
                            }
                           
                        }}
                        existingPaymentMethodRequired= "false"
                        buttonColor="white"
                        buttonType="pay"
                    />
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardComponent;