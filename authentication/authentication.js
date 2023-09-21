const { Employee } = require("../models/index");

async function authentication(req, res, next) {
  const authheader = req.headers.authorization;
  console.log(req.headers);

  if (!authheader) {
    let err = new Error("You are not authenticated!");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }

  const auth = new Buffer.from(authheader.split(" ")[1], "base64")
    .toString()
    .split(":");
  const user = auth[0];
  const pass = auth[1];

  const employee = await Employee.findOne({
    attributes: ["email", "password", "active"],
    where: { Email: user },
  });
  console.log(employee);
  console.log(
    "check",
    employee &&
      pass === employee.dataValues.password &&
      employee.dataValues.active
  );
  if (employee && pass === employee.dataValues.password) {
    next();
  } else {
    let err = new Error("You are not authenticated!");

    err.status = 401;
    return next(err);
  }
}

module.exports = authentication;
