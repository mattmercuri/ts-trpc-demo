// INFO: we can actually use generics to make a case
// insensitive type
export type ValidTickers = "QQQ" | "VTI" | "SPY" | "ABALX";

export type TickerInfo = {
  ticker: ValidTickers;
  name: string;
};

export type TickerObject = { [key in ValidTickers]: TickerInfo };
