'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('cad_addresses', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_user: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {model:"cad_users",key:"id"},
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE"       
      },
      address01:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      address02:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      reference:{
        type: Sequelize.STRING,
        allowNull: true,       
      },
      zipcode:{
        type: Sequelize.STRING,
        allowNull: false,        
      },
      state:{
        type: Sequelize.STRING,
        allowNull: false,      
      },
      city:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
    });
   
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cad_addresses');
  }
};
