import { RouterProvider } from "react-router-dom"
import AppRouter from "./AppRouter"
import AppStore from "./redux/store"
import { Provider } from "react-redux"


function App() {

  return (
    <Provider store={AppStore}>
      <RouterProvider router={AppRouter} />
    </Provider>
  )
}

export default App
