import axios from "axios";
import type { ValidTickers } from "./web.types";

axios.defaults.baseURL = "http://localhost:3000";

export function getHistoricalData(ticker: ValidTickers) {
  const reqUrl = "/historical-data";
  return axios.get(reqUrl, { params: { ticker } });
}
