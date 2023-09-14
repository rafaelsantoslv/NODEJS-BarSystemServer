import { Router, Request } from 'express';
import PedidoController from '../controllers/pedidoController'
// import LoginController from '../controllers/loginController';

const pedido = Router()
const pedidoController = new PedidoController()
// const loginController = new LoginController;
pedido.get('/api/pedido', pedidoController.add);


export default pedido;