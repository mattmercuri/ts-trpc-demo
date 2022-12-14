/* eslint-disable no-console */
import * as path from "path";
import express, { Express } from "express";
import { runCsvPipeline } from "./utils.js";

const app: Express = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/test", (req, res) => {
  runCsvPipeline(
    path.resolve(process.cwd(), "src/server/data", "QQQ.csv")
  ).then((data) => {
    res.status(200).send(JSON.stringify(data));
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
