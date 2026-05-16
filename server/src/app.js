const express = require("express");
const cors = require("cors");

const app = express();

const messageRoutes = require("./routes/messageRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(
  cors({
    origin: "https://saad-dev-five.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

module.exports = app;
