const { Position } = require("../../../../models/index");

module.exports = {
  async listAll(req, res) {
    let positions = await Position.findAll({
      attributes: ["id", "name", "departmentId"],
    });
    return positions;
  },
};
