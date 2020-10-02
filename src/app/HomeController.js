class HomeController{

    async index(req, res){
        return res.status(200).json({ok: "Hello World"});
    }

}

export default new HomeController();