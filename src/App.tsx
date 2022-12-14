import { useState } from "react";
import Select from "react-select";
import { Chart } from "./Chart";
import { tickerSelections } from "./services/tickers";
import { getHistoricalData } from "./services/web/web";
import type { OptionType } from "./types/select.types";
import { HistoricalTickerData, ValidTicker } from "./types/tickers.types";

function App() {
  const [selectedTicker, setSelectedTicker] = useState<OptionType | null>();
  const [historicalData, setHistoricalData] = useState<
    HistoricalTickerData | undefined
  >();

  const fetchHistoricalData = (selection: OptionType | null) => {
    setSelectedTicker(selection);

    if (selection?.value) {
      getHistoricalData(selection.value as ValidTicker).then(({ data }) => {
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
      {historicalData && <Chart />}
    </div>
  );
}

export default App;
