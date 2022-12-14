import { useState } from "react";
import Select from "react-select";
import { Chart } from "./Chart";
import { tickerSelections } from "./services/tickers";
import { getHistoricalData } from "./services/web/web";
import type { OptionType } from "./types/select.types";
import type { ValidTicker } from "./types/tickers.types";

function App() {
  const [selectedTicker, setSelectedTicker] = useState<OptionType | null>(
    tickerSelections[0]
  );

  const fetchHistoricalData = (selection: OptionType | null) => {
    setSelectedTicker(selection);

    if (!selection?.value) {
      return;
    }

    getHistoricalData(selection.value as ValidTicker).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="app">
      <Select
        className="app__dropdown"
        defaultValue={selectedTicker}
        onChange={fetchHistoricalData}
        options={tickerSelections}
      />
      <Chart />
    </div>
  );
}

export default App;
