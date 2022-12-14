import * as fs from "fs";
import * as path from "path";
import csvReader from "csv-reader";
import type { CsvDailyData } from "./server.types";

export const runCsvPipeline = (
  filePath: fs.PathLike
): Promise<CsvDailyData[]> => {
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
    const chunks: CsvDailyData[] = [];
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
        chunks.push(data as CsvDailyData);
      })
      .on("end", () => {
        resolve(chunks);
      });
  });
};

export const cleanDataArray = (data: CsvDailyData[]) => {
  return data.map((date) => ({
    adjustedClose: date["Adj Close"],
    close: date.Close,
    date: date.Date,
    high: date.High,
    low: date.Low,
    open: date.Open,
    volume: date.Volume,
  }));
};

export const getDataArray = async (ticker: string) => {
  let result;
  try {
    result = await runCsvPipeline(
      path.resolve(process.cwd(), "src/server/data", `${ticker}.csv`)
    );
    return cleanDataArray(result);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
