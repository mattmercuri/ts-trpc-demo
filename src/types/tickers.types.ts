// INFO: we can actually use generics to make a case
// insensitive type
export type ValidTicker = "QQQ" | "VTI" | "SPY" | "ABALX";

export type TickerInfo = {
  ticker: ValidTicker;
  name: string;
};

export type TickerObject = { [key in ValidTicker]: TickerInfo };

export type DailyTickerData = {
  adjustedClose: number;
  close: number;
  date: string;
  high: number;
  low: number;
  open: number;
  volume: number;
};

export type HistoricalTickerData = DailyTickerData[];
