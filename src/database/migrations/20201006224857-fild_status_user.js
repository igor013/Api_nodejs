'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("cad_users","status", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "A"
         //A = ATIVO, I = INATIVO, E = EXCLUÍDO
    });
  
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("cad_users","status");
  }
};
