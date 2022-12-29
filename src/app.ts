import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

app
.use(express.json())
.use(routes)
.use(cors);

app.listen(
    3100, () => console.log(`🚀 Tá rodando na 3100 irmão`)
);
