import * as fs from "fs";
import csvReader, { Line } from "csv-reader";

export const runCsvPipeline = (filePath: fs.PathLike): Promise<Line[]> => {
  const options = {
    skipEmptyLines: true,
    asObject: true, // convert data to object
    parseNumbers: true,
    parseBooleans: true,
    trim: true,
  };

  const csvStream = new csvReader(options);
  const readStream = fs.createReadStream(filePath, "utf8");

  return new Promise((resolve, reject) => {
    const chunks: Line[] = [];
    readStream
      .on("error", (err) => {
        csvStream.destroy(err);
        reject(err);
      })
      .pipe(csvStream)
      .on("error", (err) => {
        reject(err);
      })
      .on("data", (data) => {
        chunks.push(data);
      })
      .on("end", () => {
        resolve(chunks);
      });
  });
};
