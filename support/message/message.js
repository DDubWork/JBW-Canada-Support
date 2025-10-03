const express = require("express");
const bodyParser = require("body-parser");
const { twiml } = require("twilio");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  res.send("Voice endpoint is working.");
});

router.post("/", (req, res) => {
  const response = new twiml.MessagingResponse();
    response.message('Hello from JB Warranties Canada support! \n\nTo connect with Alex Bulanov, call or text (289)-200-7026 \n\nTo connect with Sam Arbour, call or text (289)-423-5553\n\nThank You!');

    res.type("text/xml");
  res.send(response.toString());
});

module.exports = router; // ✅ export the whole express app
