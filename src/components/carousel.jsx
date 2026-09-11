import React, { useRef } from "react";
import "../../src/styles/carousel.css";
import {motion, useScroll, useTransform } from "framer-motion";
import { useBluetooth } from "../../src/contexts/bluetoothContext";

const HorizontalScroll = () => {
    const { connect, disconnect, vibrate, isConnected, device } = useBluetooth();
    return (
        <div className="carousel">
            <div className="Padding" />
            <div className="buttons">
                <button className="GreenButton" onClick={ () => vibrate(1) }>1</button>
                <button className="YellowButton" onClick={ () => vibrate(2) }>2</button>
                <button className="RedButton" onClick={ () => vibrate(3) }>3</button>
            </div>
            <div className="Padding" />
        </div>
    );
};

export default HorizontalScroll;