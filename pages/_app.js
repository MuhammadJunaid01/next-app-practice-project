import Layoute from "../layoute/mainLayoute/Layoute";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layoute>
      <Component {...pageProps} />
    </Layoute>
  );
}

export default MyApp;
