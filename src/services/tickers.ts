import type { TickerObject } from "../types/tickers.types";

export const TickerInfoObject: TickerObject = {
  ABALX: {
    name: "American Balanced Fund",
    ticker: "ABALX",
  },
  QQQ: {
    name: "NASDAQ 100",
    ticker: "QQQ",
  },
  SPY: {
    name: "S&P 500",
    ticker: "SPY",
  },
  VTI: {
    name: "Total US Market",
    ticker: "VTI",
  },
};

export const tickerSelections = Object.values(TickerInfoObject).map(
  ({ ticker, name }) => ({ value: ticker, label: name })
);
