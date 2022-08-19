import Layoute from "../layoute/mainLayoute/Layoute";
import { wrapper } from "../redux/store/store";
import "../styles/globals.css";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  return (
    <Layoute>
      <Component {...pageProps} />
    </Layoute>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
export default wrapper.withRedux(MyApp);
