import express, { request, response } from 'express';
import './database';
//import { router } from './routes';

const app = express();
const port = 8888;

app.use(express.json());
//app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 