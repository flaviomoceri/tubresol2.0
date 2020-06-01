import Head from "next/head";
import NProgress from "next-nprogress/component";
import "../styles/antd.css";
import "../styles/global.css";

const App = ({ Component, pageProps }) => (
    <div>
      <NProgress
        color="#f25353"
        spinner
      />

      <Head>
        <title>Pulse</title>
      </Head>

      <Component {...pageProps} />
    </div>
);
 
export default App;