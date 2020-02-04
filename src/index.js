import express from "express";
import router from "./routers";
import bodyParser from "body-parser";
require("dotenv").config({path: __dirname + '/.env'});

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", router);

app.listen(`${port}`, () => {
  console.log(`>>>>> server run port: ${port}`);
});

export default app;
