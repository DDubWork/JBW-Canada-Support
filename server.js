const handleVoiceKey = require("./handleVoiceKey.js");
const voice = require("./voice.js");

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
  voice 
  handleVoiceKey

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on ${PORT}`);
});
