import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../src/assets/cropped_sidekick_pose2.png';
import green from '../../src/assets/green_blur.png';
import pink from '../../src/assets/pink_blur.png';
import teal from '../../src/assets/teal_blur.png';
import yellow from '../../src/assets/yellow_blur.png';
import '../../src/styles/intro.css';
import '../../src/styles/alert.css';

export default function Intro() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="Camera"></div>
            <img className="GreenIntro" src = {green} alt = "Green"/>
            <img className="PinkIntro" src = {pink} alt = "Pink"/>
            <img className="TealIntro" src = {teal} alt = "Teal"/>
            <img className="YellowIntro" src = {yellow} alt = "Yellow"/>
            <div className="ProfileIntro">
                <img className="LogoIntro" src = {logo} alt = "Logo"/>
            </div>
            <div className="TextBox">
                <div className="WelcomeTo">Welcome To</div>
                <div className="WelcomeTo">SideKick</div>
            </div>
        </div>
    )
}