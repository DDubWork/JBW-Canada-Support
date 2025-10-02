console.log("🚀 Starting server.js...");
app.get("/", (req, res) => {
  res.send("✅ Server is running. Twilio webhook endpoints are ready.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on ${PORT}`);
});
