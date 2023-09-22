const { Employee } = require("../../../../models/index");

module.exports = {
  async delete(req, res) {
    const response = await Employee.destroy({
      where: {
        Id: req.params.id,
      },
    });

    return response;
  },

  async softDelete(req, res) {
    const response = await Employee.update(
      { Active: false, DeletedAt: req.body.deletedAt },
      {
        where: {
          Id: req.body.id,
        },
      }
    );
    return response;
  },

  async update(req, res) {
    const response = await Employee.update(req.body.employee, {
      where: {
        Id: req.body.employee.Id,
      },
    });
    return response;
  },

  async create(req, res) {
    const response = await Employee.create(req.body);
    return response;
  },

  async findOne(req, res) {
    let employees = await Employee.findOne({
      attributes: [
        "firstName",
        "lastName",
        "email",
        "phoneNumber",
        "email",
        "documentNumber",
        "id",
        "gender",
        "active",
        "positionId",
      ],
      where: { Id: req.params.id },
    });
    return employees;
  },

  async listAll(req, res) {
    let employees = await Employee.findAll({
      attributes: [
        "firstName",
        "lastName",
        "email",
        "phoneNumber",
        "email",
        "documentNumber",
        "id",
        "gender",
        "active",
      ],
      include: {
        association: "position",
        attributes: ["name", "id"],
      },
      where: { active: true },
    });
    return employees;
  },
};
