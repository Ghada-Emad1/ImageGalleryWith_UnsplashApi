import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Gallery } from "./components/Gallery";

const App = () => {
  const queryclient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });
  return (
    <div>
      <QueryClientProvider client={queryclient}>
        <Gallery />
      </QueryClientProvider>
    </div>
  );
};

export default App;
