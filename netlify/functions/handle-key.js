const { twiml } = require("twilio");

exports.handler = async (event, context) => {
  const response = new twiml.VoiceResponse();

  // Twilio sends form data in the body
  const params = new URLSearchParams(event.body);
  const digit = params.get("Digits");

  if (digit === "1") {
    response.say("Please hold for Alex Bulanov");
    response.dial("+12892007026");
  } else if (digit === "2") {
    response.say("Please hold for Sam Arbour");
    response.dial("+12894235553");
  } else {
    response.say("Invalid choice, goodbye.");
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/xml" },
    body: response.toString(),
  };
};
