import { createContext, useContext, useState} from "react";
import { BluetoothService } from "../services/bluetoothService";

const BluetoothContext = createContext();

export function BluetoothProvider({ children }) {
    const [device, setDevice] = useState(null);
    const [characteristic, setCharacteristic] = useState(null);

    const connect = async () => {
        const connectedDevice = await BluetoothService.connectToDevice();
        setDevice(connectedDevice);
        setCharacteristic(connectedDevice.characteristic);

        connectedDevice.device.addEventListener("gattserverdisconnected", () => {
            setDevice(null);
            setCharacteristic(null);
        });
    };

    const disconnect = () => {
        BluetoothService.disconnect();
        setDevice(null);
        setCharacteristic(null);
    };

    const vibrate = (value) => {
        if (value == 1) {
            BluetoothService.vibrate(characteristic);
        } else if (value == 2) {
            BluetoothService.vibrate2(characteristic);
        } else {
            BluetoothService.vibrate3(characteristic);
        }
    };

    return (
        <BluetoothContext.Provider value = {{device, isConnected: !!device, connect, disconnect, vibrate}}> {children} </BluetoothContext.Provider>
    );
}

export function useBluetooth() {
    return useContext(BluetoothContext);
}