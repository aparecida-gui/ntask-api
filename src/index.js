import express from 'express';
import router from './routers';

const app = express();
const port = 3000;

app.use('/', router);

app.listen(`${port}`, () => {
  console.log(`>>>>> server run port: ${port}`);
});

export default app;