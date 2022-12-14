import type { HistoricalTickerData } from "../types/tickers.types";

export const getChartOptions = (title = "") => ({
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: title,
    },
  },
});

export const getChartData = (data: HistoricalTickerData) => {
  const shapedData = {
    labels: data.map((day) => day.date),
    datasets: [
      {
        label: "Price",
        data: data.map((day) => day.adjustedClose),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return shapedData;
};
