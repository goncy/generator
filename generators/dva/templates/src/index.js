import dva from "dva";

import counter from "./models/counter";
import jokes from "./models/jokes";
import router from "./router";

// Init
const app = dva();

// Models
app.model(counter);
app.model(jokes);

// Router
app.router(router);

// Start
app.start("#root");
