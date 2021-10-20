import PageLayout from "../components/Layout";
import "../styles/globals.css";
import NextNprogress from "nextjs-progressbar";
import { ConfigProvider } from "antd";
import "swiper/swiper-bundle.css";
import "antd/dist/antd.css";
import faIR from "antd/lib/locale/fa_IR";

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider locale={faIR} direction="rtl">
      <NextNprogress
        color="yellow"
        startPosition={0.6}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ConfigProvider>
  );
}

export default MyApp;
