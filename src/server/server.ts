const express = require('express');
const bodyParser = require('body-parser');
import router from './routes';
// import conn from './models/database';

const app = express();

app.use(bodyParser.json());
app.use(router);
// app.use(conn);

app.get('/', (req: any, res: any) => {
    res.status(202).json({"status": "sucess"})
    console.log('estou no inicio');
})


app.listen(8080, () => {
    console.log('SERVIDOR ON NA PORTA 8080');
});