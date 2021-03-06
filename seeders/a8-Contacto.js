module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Contactos",
      [
        {
          id_proveedor_cliente: 1,
          nombre: "Jose Eduardo",
          cargo: "CEO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Contactos", null, {});
  },
};
