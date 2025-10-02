console.log("🚀 Starting server.js...");


const express = require("express");
const bodyParser = require("body-parser");
const { twiml } = require("twilio");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.send("✅ Server is running. Twilio webhook endpoints are ready.");
});
// Route for initial call
app.post("/voice", (req, res) => {
  const response = new twiml.VoiceResponse();

  const gather = response.gather({
    numDigits: 1,
    timeout: 60,
    action: "/handle-key", // Twilio will POST here
  });

  gather.say(
    "Welcome to JB Warranties Canada support. Press 1 to connect to Alex Bulanov. Press 2 to connect to Sam Arbour.",
    { bargeIn: true }
  );

  response.say("We did not receive any input. Goodbye!");

  res.type("text/xml");
  res.send(response.toString());
});

// Route for handling keypress
app.post("/handle-key", (req, res) => {
  const response = new twiml.VoiceResponse();
  const digit = req.body.Digits;

  if (digit === "1") {
    response.say("Please hold for Alex Bulanov");
    response.dial("+12892007026");
  } else if (digit === "2") {
    response.say("Please hold for Sam Arbour");
    response.dial("+12894235553");
  } else {
    response.say("Invalid choice, goodbye.");
  }

  res.type("text/xml");
  res.send(response.toString());
});

// Railway needs this
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on ${PORT}`);
});
