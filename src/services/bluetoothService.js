import React, { useState } from "react";

export const BluetoothService = {

    async connectToDevice() {
        const device = await navigator.bluetooth.requestDevice({
            filters: [{ namePrefix: "SideKick" }],
            optionalServices: ["058ca73c-2f6c-4145-8a0d-737e61662902"]
        });

        const server = await device.gatt?.connect();
        const service = await server.getPrimaryService("058ca73c-2f6c-4145-8a0d-737e61662902");
        const characteristic = await service.getCharacteristic("058ca73d-2f6c-4145-8a0d-737e61662902");

        return { device, server, characteristic };
    },

    disconnect(device) {
        if (device?.gatt?.connected) {
            device.gatt.disconnect();
        }
    },

    //original
    async vibrate(characteristic) {
        if (!characteristic) return;

        const data = new Uint8Array([1, 1, 0x00, 0x0A]);
        await characteristic.writeValue(data);
    },

    async vibrate2(characteristic) {
        if (!characteristic) return;

        const data = new Uint8Array([1, 2, 0x00, 0x0A]);
        await characteristic.writeValue(data);
    },

    async vibrate3(characteristic) {
        if (!characteristic) return;

        const data = new Uint8Array([3, 1, 0x00, 0x0A]);
        await characteristic.writeValue(data);
    }
};