const { twiml } = require("twilio");

exports.handler = async (event, context) => {
  const response = new twiml.VoiceResponse();

  const gather = response.gather({
    numDigits: 1,
    timeout: 60,
    action: "/.netlify/functions/handle-key", // where Twilio will POST the digit
  });

  gather.say(
    "Welcome to JB Warranties Canada support. Press 1 to connect to Alex Bulanov. Press 2 to connect to Sam Arbour.",
    { bargeIn: true }
  );

  response.say("We did not receive any input. Goodbye!");

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/xml" },
    body: response.toString(),
  };
};
