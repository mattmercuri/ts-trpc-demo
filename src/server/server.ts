/* eslint-disable no-console */
import express, { Express } from "express";
import { convertLocalCsvToObject } from "./utils.js";

const app: Express = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/test", (req, res) => {
  const testThing = convertLocalCsvToObject("./data/QQQ.csv");
  res.status(200).send(JSON.stringify(testThing));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
