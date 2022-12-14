import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { Chart } from "./Chart";
import { trpc } from "./services/trpc";
import type { HistoricalTickerData } from "./types/tickers.types";

const Content: React.FC = () => {
  const historicalData: HistoricalTickerData = [];
  // EXAMPLE QUERY:
  // const { data } = trpc.hello.useQuery({ text: "Stephen" });
  // console.log(data?.greeting);

  return (
    <div className="app">
      {historicalData && (
        <Chart historicalData={historicalData} title="Price" />
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
