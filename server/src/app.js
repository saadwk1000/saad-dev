const express = require("express");
const cors = require("cors");
const app = express();

const messageRoutes = require("./routes/messageRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(
  cors({
    origin: "https://saad-dev-five.vercel.app",
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

module.exports = app;
