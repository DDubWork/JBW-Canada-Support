const express = require("express");
const VoiceResponse = require("twilio").twiml.VoiceResponse;
const bodyParser = require("body-parser"); // needed for URL-encoded parsing

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Create a route that will handle Twilio webhook requests, sent as an
// HTTP POST to /voice in our application
app.post("/voice", (request, response) => {
  // Use the Twilio Node.js SDK to build an XML response
  const twiml = new VoiceResponse();

  const gather = twiml.gather({
    numDigits: 1,
    timeout: 10,
    action: "/handle-key",
  });
  gather.say(
    "Welcome to JB Warranties Canada support. Press 1 to connect to Alex Bulanov. Press 2 to connect to Sam Arbour ",
    { bargeIn: true }
  );
  twiml.say("We did not receive any input. Goodbye!");
  // Render the response as XML in reply to the webhook request
  response.type("text/xml");
  response.send(twiml.toString());
});

app.post("/handle-key", (request, response) => {
  const twiml = new VoiceResponse();
  const digit = request.body.Digits;

  if (digit == 1) {
    twiml.say("Please Hold");
    twiml.dial("+16138751612");
  } else if (digit == 2) {
    twiml.say("Please Hold");
    twiml.dial("+16138751612");
  }

  response.type("text/xml");
  response.send(twiml.toString());
});
