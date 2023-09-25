import { RouterProvider } from "react-router-dom"
import { mainRoute } from "./Routes/mainRoute"
import {Provider} from "react-redux"
import {store } from "./Global/store"


const App = () => {
  return (
    <div>
      <Provider store={store}>
      <RouterProvider router = {mainRoute} />
      </Provider>
    
    </div>
  )
}

export default App