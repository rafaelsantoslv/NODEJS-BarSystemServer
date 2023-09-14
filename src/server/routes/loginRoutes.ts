import { Router } from 'express';
import LoginController from '../controllers/loginController';

const login = Router()
const loginController = new LoginController();

login.get('/login/:acao', loginController.index);


export default login;