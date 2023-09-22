var express = require("express");
var router = express.Router();
const employees = require("./v1/employees/router");
const positions = require("./v1/positions/router");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/api/v1/", employees);
router.use("/api/v1/", positions);

module.exports = router;
