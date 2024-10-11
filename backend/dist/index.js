import app from "./app.js";
import { connectToDatbase } from "./db/connections.js";
//connections and listeners
const PORT = process.env.PORT || 5000;
connectToDatbase()
    .then(() => {
    app.listen(PORT, () => console.log("Server is Open and connected to Database in port:", PORT));
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map