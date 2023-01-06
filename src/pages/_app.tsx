import '../styles/globals.css'
import "@navikt/ds-css";
import type {AppProps} from 'next/app'
import Decorator from "../components/decorator/Decorator";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                /*cacheTime: minutesToMillis(60),
                staleTime: minutesToMillis(30),
                retry: (failureCount, error) => {
                  if (isClientError(error)) {
                    return false;
                  }

                  return failureCount < 3;
                },*/
            },
        },
    }
);

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Decorator/>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    )
}
