"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mision extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mision.init(
    {
      contenido: DataTypes.TEXT,
      creado: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Mision",
      paranoid: true,
    }
  );
  return Mision;
};
