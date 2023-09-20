require("dotenv").config();

module.exports = {
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "sequelize",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",

  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",

  define: {
    timestamps: false,
    underscored: false,
  },
};
