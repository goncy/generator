// Provider
import { Provider } from "react-redux"

// Store
import store from "./modules/db/store"

// Wrap app
<Provider store={store}>
  <App />
</Provider>
