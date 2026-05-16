const Message = require("../models/messageModel");

// CREATE MESSAGE
const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      data: newMessage,
    });
  } catch (error) {
    console.log("CREATE MESSAGE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL MESSAGES (optional for admin)
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createMessage, getMessages };
