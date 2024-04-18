import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QueryCancellationWithAbortSignal from "./query-cancellation";
import UpdateQuotes from "./update-quote";
import FetchTopQuotes from "./top-quotes";
import PaginatedQuotes from "./paginated-quotes";
import InfiniteScrollQuotes from "./infinite-scroll-quotes";

const queryClient = new QueryClient();

const ReactQueryDemo = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <QueryCancellationWithAbortSignal />
      <UpdateQuotes />
      <FetchTopQuotes />
      <PaginatedQuotes />
      <InfiniteScrollQuotes />
    </QueryClientProvider>
  );
};
export default ReactQueryDemo;
