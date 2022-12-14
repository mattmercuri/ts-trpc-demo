import { useState } from "react";
import Select from "react-select";
import { tickerSelections } from "./services/tickers";
import { getHistoricalData } from "./services/web/web";
import type { OptionType } from "./services/charting";

function App() {
  const [selectedTicker, setSelectedTicker] = useState<
    OptionType | undefined | null
  >(tickerSelections[0]);

  const fetchHistoricalData = () => {
    getHistoricalData("QQQ").then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <Select
        defaultValue={selectedTicker}
        onChange={setSelectedTicker}
        options={tickerSelections}
      />
      <button onClick={fetchHistoricalData}>Get Data</button>
    </div>
  );
}

export default App;
