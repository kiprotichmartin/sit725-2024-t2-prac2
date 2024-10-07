const express = require("express");
const router = express.Router();

// GET route to add two numbers
router.get("/add", (req, res) => {
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
    return res.status(400).send("Both num1 and num2 are required.");
  }

  const sum = parseFloat(num1) + parseFloat(num2);
  res.json({ result: sum });
});

// POST route for adding numbers (accepts JSON)
router.post("/add", (req, res) => {
  const { num1, num2 } = req.body;

  if (!num1 || !num2) {
    return res.status(400).send("Both num1 and num2 are required.");
  }

  const sum = parseFloat(num1) + parseFloat(num2);
  res.json({ result: sum });
});

// Subtract two numbers
router.get("/subtract", (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) - parseFloat(num2);
  res.json({ result });
});

// Multiply two numbers
router.get("/multiply", (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) * parseFloat(num2);
  res.json({ result });
});

// Divide two numbers
router.get("/divide", (req, res) => {
  const { num1, num2 } = req.query;
  if (parseFloat(num2) === 0) {
    return res.status(400).send("Cannot divide by zero.");
  }
  const result = parseFloat(num1) / parseFloat(num2);
  res.json({ result });
});

module.exports = router;
