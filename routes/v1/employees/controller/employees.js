const { Employee } = require("../../../../models/index");

module.exports = {
  async listAll(req, res) {
    let employees = await Employee.findAll({
      attributes: ["FirstName", "LastName", "Email"],
      include: {
        association: "position",
        attributes: ["name"],
      },
    });
    return employees;
  },
};
