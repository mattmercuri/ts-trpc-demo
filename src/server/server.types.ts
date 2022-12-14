import type { Request } from "express";

export type CsvDailyData = {
  "Adj Close": number;
  Close: number;
  Date: string;
  High: number;
  Low: number;
  Open: number;
  Volume: number;
};

type Tickers = "QQQ" | "VTI" | "SPY" | "ABALX";
type TickerQuery = { ticker: Tickers };
export type GetHistoricalData = Request<unknown, unknown, unknown, TickerQuery>;
