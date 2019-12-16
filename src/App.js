import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import Routes from "./routes";

import {store, persistor} from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
