import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../src/assets/cropped_sidekick_pose1.png';
import green from '../../src/assets/green_blur.png';
import pink from '../../src/assets/pink_blur.png';
import teal from '../../src/assets/teal_blur.png';
import yellow from '../../src/assets/yellow_blur.png';
import '../../src/styles/login.css';

export default function Login() {
    const navigate = useNavigate();

    return (
        <div>
            <img className="Logo" src = {logo} alt = "Logo"/>
            <img className="Green" src = {green} alt = "Green"/>
            <img className="Pink" src = {pink} alt = "Pink"/>
            <img className="Teal" src = {teal} alt = "Teal"/>
            <img className="Yellow" src = {yellow} alt = "Yellow"/>
            <div className="MainText">SideKick</div>
            <div className="Offset">SideKick</div>
            <button className = "LoginButton" onClick={() => navigate("/alert")}>Login</button>
            <button className = "SignUp">Sign Up</button>
        </div>
    )
}