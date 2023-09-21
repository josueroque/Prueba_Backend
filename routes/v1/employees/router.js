const express = require("express");
const router = express.Router();
const employee = require("./controller/employees");
const authentication = require("../../../authentication/authentication");

router.get("/employees", async function (req, res) {
  const employees = await employee.listAll();
  res.status(200).json(employees);
});

router.get("/employees/:id", async function (req, res) {
  const employees = await employee.findOne(req, res);
  res.status(200).json(employees);
});

router.post("/employees/authenticate", async function (req, res) {
  try {
    const response = await authentication(req, res);
    res.status(200).json({ message: "Success!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something wrong happened!" });
  }
});

router.post("/employees", async function (req, res) {
  try {
    const response = await employee.create(req, res);
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something wrong happened!" });
  }
});

router.put("/employees/:id", async function (req, res) {
  try {
    const response = await employee.update(req, res);
    res.status(204).json(response);
  } catch (error) {
    res.status(500).json({ message: "Something wrong happened!" });
  }
});

router.delete("/employees/:id", async function (req, res) {
  try {
    const response = await employee.delete(req, res);
    res.status(200).json({ rowsDeleted: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something wrong happened!" });
  }
});

module.exports = router;
