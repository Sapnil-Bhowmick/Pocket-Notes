import { RouterProvider } from "react-router-dom"
import AppRouter from "./AppRouter"

import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react";

import AppStore , {persistor} from "./redux/store.js";

function App() {

  return (
    <Provider store={AppStore}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={AppRouter} />
      </PersistGate>
    </Provider>
  )
}

export default App
