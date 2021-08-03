"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UsuarioProvClis", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Usuario",
          key: "id",
          as: "id_usuario",
        },
      },
      id_proveedor_cliente: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "ProveedorCliente",
          key: "id",
          as: "id_proveedor_cliente",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("UsuarioProvClis");
  },
};