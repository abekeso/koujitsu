import "styles/globals.css";
import Layout from "components/layout";

//Font Awesomeの設定
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
}
export default MyApp;
