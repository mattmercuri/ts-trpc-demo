import axios from "axios";
import type { ValidTicker } from "../../types/tickers.types";
import type { GetHistoricalData } from "./web.types";

axios.defaults.baseURL = "http://localhost:3000";

export function getHistoricalData(ticker: ValidTicker) {
  const reqUrl = "/historical-data";
  return axios.get<GetHistoricalData>(reqUrl, { params: { ticker } });
}
