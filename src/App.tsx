import { useState } from "react";
import Select from "react-select";
import { tickerSelections } from "./services/tickers";
import { getHistoricalData } from "./services/web/web";
import type { OptionType } from "./types/select.types";

function App() {
  const [selectedTicker, setSelectedTicker] = useState<OptionType | null>(
    tickerSelections[0]
  );

  const fetchHistoricalData = () => {
    getHistoricalData("QQQ").then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="app">
      <Select
        className="app__dropdown"
        defaultValue={selectedTicker}
        onChange={setSelectedTicker}
        options={tickerSelections}
      />
      <button onClick={fetchHistoricalData}>Get Data</button>
    </div>
  );
}

export default App;
