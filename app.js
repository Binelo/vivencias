import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./src/database/database.js";
import router from "./src/routes/index.js";

const app = express();

db.connectDatabase();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // necessário se usar cookies/autenticação
  })
);

app.use(express.json());
app.use(router);

export default app;