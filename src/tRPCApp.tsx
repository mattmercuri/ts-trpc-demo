import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import Select from "react-select";
import { Chart } from "./Chart";
import { tickerSelections } from "./services/tickers";
import { trpc } from "./services/trpc";
import type { OptionType } from "./types/select.types";
import type { HistoricalTickerData } from "./types/tickers.types";

const Content: React.FC = () => {
  const [selectedTicker, setSelectedTicker] = useState<OptionType>();
  const [historicalData, setHistoricalData] = useState<
    HistoricalTickerData | undefined
  >();

  // EXAMPLE QUERY:
  // const { data } = trpc.hello.useQuery({ text: "Stephen" });
  // console.log(data?.greeting);

  return (
    <div className="app">
      <Select
        className="app__dropdown"
        defaultValue={selectedTicker}
        // onChange={fetchHistoricalData}
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

const App: React.FC = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Content />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
