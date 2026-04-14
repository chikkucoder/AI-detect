const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// API route
app.post("/predict", async (req, res) => {
  try {
    const text = req.body.text;

    const response = await axios.post("http://127.0.0.1:8001/predict", {
      text: text
    });

    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Model error" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});