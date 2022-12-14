import { getHistoricalData } from "./services/web/web";

function App() {
  const fetchHistoricalData = () => {
    getHistoricalData("QQQ").then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <button onClick={fetchHistoricalData}>Get Data</button>
    </div>
  );
}

export default App;
