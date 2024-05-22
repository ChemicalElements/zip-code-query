import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UpdateAddressScreen } from "./screens/UpdateAddressScreen";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <UpdateAddressScreen />
      </QueryClientProvider>
    </div>
  );
}

export default App;
