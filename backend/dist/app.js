import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cors from "cors";
config();
const app = express();
//middlewares
app.use(express.json());
app.use(cors());
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map