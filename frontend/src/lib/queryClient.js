import { QueryClient } from '@tanstack/react-query';

let queryClient;

export function getQueryClient() {
  if (!queryClient) {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
            refetchOnWindowFocus: false
        }
      }
    });
  }
  return queryClient;
}
