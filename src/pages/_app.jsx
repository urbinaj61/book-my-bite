import { SWRConfig } from "swr";
import "@/styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SWRConfig>
  );
}
