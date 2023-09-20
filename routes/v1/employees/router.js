const express = require("express");
const router = express.Router();
const employee = require("./controller/employees");

router.get("/employees", async function (req, res) {
  let employees = await employee.listAll();
  res.status(200).json(employees);
});

module.exports = router;
