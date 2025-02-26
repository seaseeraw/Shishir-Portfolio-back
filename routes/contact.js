
// backend/routes/contact.js
const express = require('express');
const router = express.Router();
const ContactForm = require('../models/ContactForm');

// POST route to save contact form data
router.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact message
    const newMessage = new ContactForm({
      name,
      email,
      message,
    });

    // Save to MongoDB
    await newMessage.save();

    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

module.exports = router;
