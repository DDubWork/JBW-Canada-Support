const express = require("express");
const bodyParser = require("body-parser");
const { twiml } = require("twilio");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


const handleKey = app.post("/handle-key", (req, res) => {
  const response = new twiml.VoiceResponse();
  const digit = req.body.Digits;

  if (digit === "1") {
    response.say("Please hold for Alex Bulanov", language="en-US");
    response.dial("+12892007026");
  } else if (digit === "2") {
    response.say("Please hold for Sam Arbour", language="en-US");
    response.dial("+12894235553");
  } else if (digit === "*") {
    response.redirect("/voice");
  }

  res.type("text/xml");
  res.send(response.toString());
});

module.exports = handleVoiceKey;