const express = require("express");
const bodyParser = require("body-parser");
const { twiml } = require("twilio");
const app = express();
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));


router.post("/", (req, res) => {
  const response = new twiml.VoiceResponse();
  const digit = req.body.Digits;

 if (digit === "1") {
  response.say("Please hold", { language: "en-US" });
  const dial = response.dial();
  dial.number("+12892007026");
  dial.number("+12894235553");

} else if (digit === "*") {
  response.redirect("/voice");
}

  res.type("text/xml");
  res.send(response.toString());
});

module.exports = router;