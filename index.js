const express = require("express");
const path = require("path");
const app = express();
const calculatorRoute = require("./routes/calculator");

// Middleware to serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Use the calculator route for any requests to /api
app.use("/api", calculatorRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
