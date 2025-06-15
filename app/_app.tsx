import '@/styles/style.css';
import '@/styles/archive.css';
import '@/styles/fancybox.css';
import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}