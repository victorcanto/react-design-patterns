import api from "../api";

interface Quote {
  id?: string;
  quote: string;
  author: string;
}

export const fetchTopQuotes = async (config: object): Promise<Quote[]> =>
  api.get("top_quotes", config).then((response) => response.data.quotes);

export const postQuote = async (quote: Quote) => api.post("", quote);
export const resetQuotes = async () => api.post("reset", {});
export const fetchQuotesByPage = async (
  page: number
): Promise<{ quotes: Quote[]; hasMore: boolean }> =>
  api.get("", { params: { page } }).then((response) => response.data);
export const fetchQuotesByCursor = async (
  cursor: string
): Promise<{ quotes: Quote[]; nextCursor: string }> =>
  api.get("", { params: { cursor } }).then((response) => response.data);
