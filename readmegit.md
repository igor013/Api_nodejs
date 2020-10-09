git stash // desfaz um commit local (levar em consideração que poderá perder um comentário no git)

git checkout <branch> // troca o branch do git no terminal

git pull origin <nome_branch> // puxa todo código do github

git add . // coloca o código no stage área

git commit -m "seu comentário"  // põe comentário no stage área

git push origin <nome_branch> // sobe o código para o github


yarn sequelize db:migration // Rodar as migration

yarn sequelize db:seed:all // Rodar a seed


///////////////////// Cria uma nova coluna //////////////////////////////////////

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("cash_registers", "saldo_anterior", {
      type: Sequelize.STRING,
      allowNull: true,
      onDelete: "SET NULL"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("cash_registers", "saldo_anterior");
  }
};


/////////////////////////////////////////////////////////////////////