import { QueryClient } from '@tanstack/react-query';

let queryClient;
/* Ensure single instance (hot-reload safe) */
export function getQueryClient() {
  if (!queryClient) {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: 1
        }
      }
    });
  }
  return queryClient;
}
