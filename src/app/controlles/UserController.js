import User from "../models/User";

class UserController {
    async index(req, res) {
        try {
            let users = await User.findAll();

            return res.status(200).json(users)
        } catch (error) {
            console.log("ocorreu um erro", error)
            return res.status(400).json({ error: "ocorreu um erro" })

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