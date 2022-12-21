import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Decorator from "./decorator/Decorator";

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <Decorator />
    <Component {...pageProps} />
  </div>
}
