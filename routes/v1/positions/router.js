const express = require("express");
const router = express.Router();
const position = require("./controller/positions");

router.get("/positions", async function (req, res) {
  const positions = await position.listAll();
  res.status(200).json(positions);
});

module.exports = router;
