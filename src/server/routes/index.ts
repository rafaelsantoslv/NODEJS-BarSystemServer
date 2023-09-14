import { Router } from 'express';
import loginRoutes from './loginRoutes';
import pedido from './pedidoRoutes';

const router = Router();

router.use(loginRoutes, pedido);

const response = (cod: any) => {
    const http_response: any = {
        "200": "Sucess",
        "201": "Created",
        "401": "Unauthorized",
        "402": "Payment Required",
        "404": "Not Found",
        "500": "Internal Error"
    }
    const message = http_response[cod]
    if (message) {
        return message
    } else {
        return "Error"
    }
}






export default router;
