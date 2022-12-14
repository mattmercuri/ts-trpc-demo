import { useState } from "react";
import Select from "react-select";
import { Chart } from "./Chart";
import { tickerSelections } from "./services/tickers";
import { getHistoricalData } from "./services/web/web";
import type { OptionType } from "./types/select.types";
import type { HistoricalTickerData } from "./types/tickers.types";

const App: React.FC = () => {
  const [selectedTicker, setSelectedTicker] = useState<OptionType>();
  const [historicalData, setHistoricalData] = useState<
    HistoricalTickerData | undefined
  >();

  const fetchHistoricalData = (selection: OptionType) => {
    setSelectedTicker(selection);

    if (selection?.value) {
      getHistoricalData(selection.value).then(({ data }) => {
        setHistoricalData(data);
      });
    }
  };

  return (
    <div className="app">
      <Select
        className="app__dropdown"
        defaultValue={selectedTicker}
        onChange={fetchHistoricalData}
        options={tickerSelections}
      />
      {historicalData && (
        <Chart
          historicalData={historicalData}
          title={selectedTicker?.value || "Price"}
        />
      )}
    </div>
  );
};

export default App;
