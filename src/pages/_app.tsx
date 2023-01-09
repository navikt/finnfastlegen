import React, {useState} from "react";
import '../styles/globals.css'
import "@navikt/ds-css";
import type {AppProps} from 'next/app'
import Decorator from "../components/decorator/Decorator";
import {Hydrate, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {minutesToMillis} from "../utils/timeUtils";
import {isClientError} from "../api/errors";

export default function App({Component, pageProps}: AppProps) {
    const [queryClient] = useState(() => new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    cacheTime: minutesToMillis(60),
                    staleTime: minutesToMillis(30),
                    retry: (failureCount, error) => {
                      if (isClientError(error)) {
                        return false;
                      }

                      return failureCount < 3;
                    },
                },
            },
        }
    ))

    return (
        <>
            <Decorator/>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Component {...pageProps} />
                </Hydrate>
            </QueryClientProvider>
        </>
    )
}
