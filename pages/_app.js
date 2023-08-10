import "../app/globals.css";

import { wrapper } from "../store/store";
import { Provider } from "react-redux";

function App({ Component, pageProps }) {
  const { ...rest } = pageProps;
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(App);
