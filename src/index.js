import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    status: 'Bem-Vindo NTalk API'
  })
});


app.listen(`${port}`, () => {
  console.log(`>>>>> server run port: ${port}`);
});

export default app;