import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import User from '../app/models/Users';
import Address from '../app/models/Address';

//Aqui sera um array que carregara todos os espelhos das tabelas, posteriormente o map fara a associacao
const models = [
  User,Address,  
];

class Database {
  constructor(){
    this.init();
  }

  init(){
    this.connection = new Sequelize(databaseConfig);
    models
    .map(model=> model.init(this.connection) )
    .map(model=> model.associate && model.associate(this.connection.models) );
  }
}
export default new Database();