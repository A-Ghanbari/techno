import Layout from "../components/Layout";
import "../styles/globals.css";
import NextNprogress from "nextjs-progressbar";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import faIR from "antd/lib/locale/fa_IR";

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider locale={faIR} direction="rtl">
      <Layout>
        <NextNprogress
          color="yellow"
          startPosition={0.6}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  );
}

export default MyApp;
