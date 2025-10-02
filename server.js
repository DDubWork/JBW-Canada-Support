console.log("🚀 Starting server.js...");

console.log("🚀 Starting server.js...");


const express = require("express");
const bodyParser = require("body-parser");
const { twiml } = require("twilio");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("✅ Server is running. Twilio webhook endpoints are ready.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on ${PORT}`);
});
