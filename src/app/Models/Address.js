import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init({
      id_user: Sequelize.INTEGER,
      address01: Sequelize.STRING,
      address02: Sequelize.STRING,
      reference: Sequelize.STRING,
      zipcode: Sequelize.STRING,
      state: Sequelize.STRING,      
      city: Sequelize.STRING,      
    
    },
      {
        sequelize,
        tableName: 'cad_addresses'
      }
    );
    
     return this;

  }
}
export default Address;