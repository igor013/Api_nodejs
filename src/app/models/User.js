import Sequelize, { Model } from 'sequelize';

class User extends Model {

  static init(sequelize) {
    super.init({
      id_city: Sequelize.INTEGER,
      name: Sequelize.STRING,
      mail: Sequelize.STRING,
      age: Sequelize.INTEGER,
      pass: Sequelize.STRING,
      ismaster:Sequelize.BOOLEAN,
      status:Sequelize.ENUM("A"|"I"|"E")
    },
      {
        sequelize,
        tableName: 'cad_users'
      }
    );
    
     return this;

  }
 
  static associate(models){
    this.belongsTo(models.Accreditedcity, { foreignKey: 'id_city', as: 'city' });
  }

}

export default User;
