const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const getContactsFilePath = () => {
  if (process.env.CONTACTS_FILE) {
    return path.isAbsolute(process.env.CONTACTS_FILE)
      ? process.env.CONTACTS_FILE
      : path.resolve(__dirname, "..", process.env.CONTACTS_FILE);
  }
  return path.join(__dirname, "../data/contacts.json");
};

router.post("/", (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !name.trim())
      return res.status(400).json({
        error: "Name is required",
      });

    if (!email || !email.trim())
      return res.status(400).json({
        error: "Email is required",
      });

    if (!message || !message.trim())
      return res.status(400).json({
        error: "Message is required",
      });

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email format",
      });
    }

    const filePath = getContactsFilePath();
    let contacts = [];

    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8").trim();
      contacts = content ? JSON.parse(content) : [];
    } else {
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    }

    const newContact = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    contacts.push(newContact);

    fs.writeFileSync(
      filePath,
      JSON.stringify(contacts, null, 2)
    );

    res.status(201).json({
      message: "Contact submitted successfully",
      data: newContact,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", (req, res, next) => {
  try {
    const filePath = getContactsFilePath();
    let contacts = [];

    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8").trim();
      contacts = content ? JSON.parse(content) : [];
    }

    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
