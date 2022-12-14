import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getChartData, getChartOptions } from "./services/charting";
import { HistoricalTickerData } from "./types/tickers.types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ChartProps = {
  historicalData: HistoricalTickerData;
  title: string;
};

export const Chart: React.FC<ChartProps> = ({ historicalData, title }) => {
  const chartOptions = getChartOptions(title);
  const chartData = getChartData(historicalData);

  return (
    <div className="app__chart">
      <Line options={chartOptions} data={chartData} />
    </div>
  );
};
