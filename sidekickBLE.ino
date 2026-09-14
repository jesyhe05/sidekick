#include <ArduinoBLE.h>

BLEService hapticService("058ca73c-2f6c-4145-8a0d-737e61662902");
BLECharacteristic hapticCharacteristic("058ca73d-2f6c-4145-8a0d-737e61662902", BLEWrite | BLERead, 4);

int motorPin = 5;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  if(!BLE.begin()) {
    Serial.println("BLE failed to start");
    while(1);
  
    pinMode(motorPin, OUTPUT);
  }

  BLE.setLocalName("SideKick");
  BLE.setAdvertisedService(hapticService);
  hapticService.addCharacteristic(hapticCharacteristic);
  BLE.addService(hapticService);
  BLE.advertise();
  Serial.println("Waiting to pair");
}

void loop() {
  // put your main code here, to run repeatedly:
  BLEDevice central = BLE.central();

  //if (central) {
    //Serial.print("Connected to central: ");
    //Serial.println(central.address());
    
  //}

  while(central.connected()) {
    if (hapticCharacteristic.written()) {
      /*byte value = hapticCharacteristic.value();

      analogWrite(motorPin, 200); // PWM signal
      delay(500);
      analogWrite(motorPin, 0);*/

      const uint8_t* data = hapticCharacteristic.value();

      uint8_t num = data[1];
      uint8_t length = data[0];

      for (int i = 0; i < num; i++) {
        analogWrite(motorPin, 200); // PWM signal
        delay(250 * length);
        analogWrite(motorPin, 0);
        delay(150);
      }
    }
  }

}
