const handleVoiceKey = require("./voice/handleVoiceKey.js");
const voice = require('./voice/voice.js');
const message = require('./message/message.js');

const express = require("express");
const bodyParser = require("body-parser");
const { twiml } = require("twilio");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

console.log("🚀 Starting server.js...");

app.get("/", (req, res) => {
  res.send("✅ Server is running. Twilio webhook endpoints are ready. Testing");
});

app.use('/voice', voice); // use the voice app
app.use('/handleVoiceKey', handleVoiceKey); // use the
app.use('/message', message); // use the


const PORT = 80;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on ${PORT}`);
});
