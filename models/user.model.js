const {DataTypes } = require("sequelize");
const sequelize = require("./db");

const User = sequelize.define("user", {
  username: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;