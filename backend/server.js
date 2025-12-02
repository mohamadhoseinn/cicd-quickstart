const express = require("express");
const app = express();
const PORT = 3001;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
