import express from 'express';
import indexRouter from './routers/index-route';
import router from './routers/routers';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(indexRouter);
app.use(router);

app.listen(4000);

