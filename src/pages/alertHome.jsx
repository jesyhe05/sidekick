import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BluetoothService } from "../../src/services/bluetoothService";
import { useBluetooth } from "../../src/contexts/bluetoothContext";

import logo from '../../src/assets/cropped_sidekick_pose2.png';
import green from '../../src/assets/green_blur.png';
import pink from '../../src/assets/pink_blur.png';
import teal from '../../src/assets/teal_blur.png';
import yellow from '../../src/assets/yellow_blur.png';
import battery from '../../src/assets/Charged Battery.png';
import devicePNG from '../../src/assets/untitled.307 1.png';
import home from '../../src/assets/Dog House.png';
import settings from '../../src/assets/Settings.png';
import '../../src/styles/alert.css';
import Carousel from '../../src/components/carousel';

export default function Alert() {
    const { connect, disconnect, vibrate, isConnected, device } = useBluetooth();
    const navigate = useNavigate();

    return (
        <div>
            <div className="Camera"></div>
            <img className="GreenAlert" src = {green} alt = "Green"/>
            <img className="Green2Alert" src = {green} alt = "Green"/>
            <img className="PinkAlert" src = {pink} alt = "Pink"/>
            <img className="TealAlert" src = {teal} alt = "Teal"/>
            <img className="YellowAlert" src = {yellow} alt = "Yellow"/>
            <img className="Yellow2Alert" src = {yellow} alt = "Yellow"/>
            <div className="ProfileAlert">
                <img className="LogoAlert" src = {logo} alt = "Logo"/>
            </div>
            <div className="SidekickAlert">SideKick</div>
            <div className="NameAlert">Annie's SideKick</div>
            <div className="StatusText">Status:</div>
            <div className={`StatusAlert ${isConnected ? "connected" : "disconnected"}`}>
                {isConnected ? "Connected!" : "Not Connected"}
            </div>
            <div className="CommandBoxAlert">
                <div>
                    <Carousel />
                </div>
                <button className="ReconnectAlert" onClick={connect}> Pair Device </button>
                <button className="DisconnectAlert" onClick={disconnect}> Disconnect </button>
                <div className="Oval2"></div>
            </div>
            <div className ="NavBar">
                <img className="home" src = {home} alt = "home"/>
                <img className="settings" src = {settings} alt = "settings"/>
            </div>
            <div className="DeviceInfo">
                <img className="devicePNG" src = {devicePNG} alt = "devicePNG"/>
                <img className="battery" src = {battery} alt = "battery"/>
            </div>
        </div>
    )
}