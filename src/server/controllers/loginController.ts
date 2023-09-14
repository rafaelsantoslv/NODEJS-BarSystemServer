import { Request, Response } from "express";
// import { readJsonFile } from "fs";
let jsonprodutos = require('./produtos.json')

class LoginController {
    async index(req: any, res: any) {
        const acao = req.params.acao
        console.log(acao);
        if(acao === 'produtos') {
            return (
                res.status(200).json({jsonprodutos})
                
                
            )
        }
        res.status(401).end()

    }
}

export default LoginController;