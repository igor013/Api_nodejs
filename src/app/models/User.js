import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";
//const bcrypt = require("bcryptjs");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id_city: Sequelize.INTEGER,
        name: Sequelize.STRING,
        mail: Sequelize.STRING,
        age: Sequelize.INTEGER,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        ismaster: Sequelize.BOOLEAN,
        status: Sequelize.ENUM(["A", "I", "E"]),
      },
      {
        sequelize,
        tableName: "cad_users",
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
  
    this.addHook("beforeUpdate", async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Accreditedcity, {
      foreignKey: "id_city",
      as: "city",
    });
    
    this.hasMany(models.Address, {
      foreignKey: "id_user",
      as: "address",
    });
  }
}

export default User;
