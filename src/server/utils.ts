/* eslint-disable no-console */
import * as fs from "fs";
import csvReader, { Line } from "csv-reader";

const runCsvPipeline = (filePath: fs.PathLike) => {
  const options = {
    skipEmptyLines: true,
    asObject: true, // convert data to object
    parseNumbers: true,
    parseBooleans: true,
    trim: true,
  };

  const csvStream = new csvReader(options);
  const readStream = fs.createReadStream(filePath, "utf8");

  const processedObject: Line[] = [];
  readStream
    .on("error", (err) => {
      console.log(err);
      csvStream.destroy(err);
    })
    .pipe(csvStream)
    .on("error", (err) => {
      console.error(err);
    })
    .on("data", (data) => {
      processedObject.push(data);
    })
    .on("end", () => {
      console.log("done");
    });

  return processedObject;
};

export const convertLocalCsvToObject = (filePath: fs.PathLike) => {
  const test = runCsvPipeline(filePath);

  return test;
};
