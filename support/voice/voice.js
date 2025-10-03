const express = require("express");
const bodyParser = require("body-parser");
const { twiml } = require("twilio");
const router = express.Router();


router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  res.send("Voice endpoint is working.");
});


router.post("/", (req, res) => {
  const response = new twiml.VoiceResponse();

  const gather = response.gather({
    numDigits: 1,
    timeout: 60,
    action: "/handleVoiceKey", // Twilio will POST here
  });

  gather.say(
    "Welcome to JB Warranties Canada support. Press 1 to connect with the support team. To repeat this message, press star",
    { bargeIn: true, language: "en-US" }
  );

  response.say("We did not receive any input. Goodbye!", { language: "en-US" });

  res.type("text/xml");
  res.send(response.toString());
});

module.exports = router; // ✅ export the whole express app
