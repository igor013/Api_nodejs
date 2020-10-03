import Sequelize from "sequelize";
import User from "../Models/Users";


class UserController {
  async index(req, res) {
    try {
      let users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
        console.log("error",error);
      return res.status(400).json({ error: "Falha ao listar usuarios" });
    }
  }
  async store(req, res) {
    return res.status(200).json({ messege: "cad_Users" });
  }
  async update(req, res) {
    return res.status(200).json({ messege: "cad_Users" });
  }
  async destroy(req, res) {
    return res.status(200).json({ messege: "cad_Users" });
  }
}

export default new UserController();
