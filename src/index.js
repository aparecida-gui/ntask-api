import express from 'express';
import router from './routers';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router);

app.listen(`${port}`, () => {
  console.log(`>>>>> server run port: ${port}`);
});

export default app;