const express = require("express");
const cors = require("cors");
const path = require("path");

const server = express();
const PORT = 7400;

// Enable CORS for the shell application
server.use(
  cors({
    origin: "http://localhost:4321",
  })
);

// Serve static files from the dist directory
server.use("/", express.static(path.join(__dirname, "../dist")));

server.listen(PORT, () => {
  console.log(`Vue micro frontend server running on http://localhost:${PORT}`);
});
