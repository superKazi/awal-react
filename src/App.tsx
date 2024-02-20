import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import { Header } from "./components/header/Header";
import { Search } from "./components/search/Search";
import "./app.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        <Header />
        <Search />
      </MotionConfig>
    </QueryClientProvider>
  );
}

export default App;
