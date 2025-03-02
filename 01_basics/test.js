const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const filepath = path.join(__dirname, "text.js");
fs.readFile(filepath, "utf8", (err, data) => {
  if (err) {
    console.log("error");
  }
  console.log(data);
});

app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});
