/* eslint-disable no-console */
import express, { Express } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
