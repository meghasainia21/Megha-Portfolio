import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

export default router;