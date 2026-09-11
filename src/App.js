import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BluetoothService } from "./services/bluetoothService";
import { BluetoothProvider } from "./contexts/bluetoothContext";

import './App.css';

import Alert from "./pages/alertHome";
import Device from "./pages/device";
import Intro from "./pages/intro";
import Login from "./pages/login";
import Settings from "./pages/settings";

if (!navigator.bluetooth) {
  alert("web bluetooth not supported")
}

 export default function App() {
  return (
    <BluetoothProvider>
      <div className="app-container">
        <div className="app">
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/intro" element={<Intro />} />
              <Route path="/device" element={<Device />} />
              <Route path="/alert" element={<Alert />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Router>
        </div>
      </div>
    </BluetoothProvider>
  );
}

