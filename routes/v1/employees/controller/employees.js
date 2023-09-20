const { Employee } = require("../../../../models/index");

module.exports = {
  async listAll(req, res) {
    let employees = await Employee.findAll({
      attributes: [
        "FirstName",
        "LastName",
        "Email",
        "PhoneNumber",
        "Email",
        "DocumentNumber",
        "Id",
        "Gender",
        "Active",
      ],
      include: {
        association: "position",
        attributes: ["name"],
      },
    });
    return employees;
  },
};
