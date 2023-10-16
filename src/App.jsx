import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Gallery } from "./components/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
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
      <BrowserRouter>
        <QueryClientProvider client={queryclient}>
          <Gallery />
          <Routes>
            <Route path="/photodetail:id" element={<Details/>}/>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
