"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LineaDeTiempo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LineaDeTiempo.belongsTo(models.DataEmbarque, {
        foreignKey: "id_embarque",
        onDelete: "CASCADE",
      });
      LineaDeTiempo.hasMany(models.ComentariosLTiempo, {
        foreignKey: "id_linea_tiempo",
      });
    }
  }
  LineaDeTiempo.init(
    {
      id_embarque: DataTypes.INTEGER,
      fecha_fin: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "LineaDeTiempo",
      paranoid: true,
    }
  );
  return LineaDeTiempo;
};
