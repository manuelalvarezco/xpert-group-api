import express from "express";
import { routerApi } from "./routes";
//import dbConnection from "./database/config";
const app = express();

app.use(express.json());
const APP_PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("some pinged here!!");
  res.send("pong");
});


//dbConnection();


routerApi(app);

app.listen(APP_PORT, () => {
  console.log(`Server running in port ${APP_PORT}`);
});
