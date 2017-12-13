// Provider
import "rxjs"
import { Provider } from "react-redux"

// Store
import configureStore from "./store/configureStore"

// Initialize store
const store = configureStore()

// Wrap app
<Provider store={store}>
  <App />
</Provider>

