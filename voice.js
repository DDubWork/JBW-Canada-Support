const express = require("express");
const bodyParser = require("body-parser");
const { twiml } = require("twilio");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));



const voice = app.post("/voice", (req, res) => {
  const response = new twiml.VoiceResponse();

  const gather = response.gather({
    numDigits: 1,
    timeout: 60,
    action: "/handle-key", // Twilio will POST here
  });

  gather.say(
    "Welcome to JB Warranties Canada support. Press 1 to connect to Alex Bulanov. Press 2 to connect to Sam Arbour. To repeat this message, press star",
    { bargeIn: true, language:"en-US" }
  );

  response.say("We did not receive any input. Goodbye!", language="en-US");
});

module.exports = voice