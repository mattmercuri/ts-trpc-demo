import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export function getHistoricalData(ticker: string) {
  const reqUrl = "/historical-data";
  return axios.get(reqUrl, { params: { ticker } });
}
