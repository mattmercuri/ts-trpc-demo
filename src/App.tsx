import { getHistoricalData } from "./services/web/web";

function App() {
  return (
    <div>
      <button onClick={() => getHistoricalData("QQQ")}>Get Data</button>
    </div>
  );
}

export default App;
