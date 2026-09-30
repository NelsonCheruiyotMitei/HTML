let temperature = 22;
let motionDetected = true;
let lightStatus;
let timeOfDay = "afternoon";

// 1. Check the temperature
if (temperature > 25) {
    console.log("Turning on the air conditioner.");
}

// 2. Control the lights based on motion
if (motionDetected === true) {
    console.log("Turning on the lights.");
} else {
    console.log("Turning off the lights.");
}

// 3. Set the light status based on the time of day
if (timeOfDay === "morning") {
    lightStatus = "off";
} else if (timeOfDay === "afternoon") {
    lightStatus = "dim";
} else if (timeOfDay === "evening") {
    lightStatus = "bright";
} else {
    lightStatus = "off";
}

console.log("Current light status:", lightStatus);

while (temperature > 20) {
    console.log("Temperature:", temperature);
    temperature--;
}
console.log("Final temperature:", temperature);

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

