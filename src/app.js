import express from 'express';
import cors from 'cors';
import router from './Routers/indexRouter.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);



const port = 5000;
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
});