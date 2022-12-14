import { useState } from "react";
import Select from "react-select";
import { tickerSelections } from "./services/tickers";
import { getHistoricalData } from "./services/web/web";
import { ValidTickers } from "./types/tickers.types";

function App() {
  const [selectedTicker, setSelectedTicker] = useState<ValidTickers | null>(
    tickerSelections[0].value
  );

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
