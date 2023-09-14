import { Request, Response } from "express";
import dateFormater from "../functions/index"

class PedidoController {
    async add(req: any, res: any) {
        
        const date = dateFormater()
        const user = req.headers.user
        const pedido = req.body 
        const reqIP = req.ip
        const acao = req.query.a
        const teste = req.query.teste
        if(!pedido.produtoId) {
            return(
                res.status(404).json({"message": "Not Found", "status": "404"})
                
            )
        }else {
            return(
                res.status(200).json({"message": "sucess", "status": "200"}),
                console.log(`${date} | ${reqIP}`)
                
            )
        }
        
    }
}


    export default PedidoController;