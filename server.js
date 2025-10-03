const handleVoiceKey = require("./handleVoiceKey.js");

const express = require("express");
const bodyParser = require("body-parser");
const { twiml } = require("twilio");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

console.log("🚀 Starting server.js...");

app.get("/", (req, res) => {
  res.send("✅ Server is running. Twilio webhook endpoints are ready.");
});
// Route for initial call
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
  handleVoiceKey

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on ${PORT}`);
});
