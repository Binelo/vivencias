import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./src/database/database.js";
import router from "./src/routes/index.js";

const app = express();

db.connectDatabase();

// const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: function (origin, callback) {
      callback(null, origin || "*");
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(router);

export default app;
