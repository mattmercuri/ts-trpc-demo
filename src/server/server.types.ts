import type { Request } from "express";

type Tickers = "QQQ" | "VTI" | "SPY" | "ABALX";
type TickerQuery = { ticker: Tickers };
export type GetHistoricalData = Request<unknown, unknown, unknown, TickerQuery>;
