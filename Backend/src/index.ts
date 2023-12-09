
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pingRouter } from "./router/pingRouter";
import { foodRouter } from "./router/foodRouter";
import { wineRouter } from "./router/wineRouter";
import { orderRouter } from "./router/orderRouter";
import { drinkRouter } from "./router/drinkRouter";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});

app.use("/ping", pingRouter);
app.use("/api/food", foodRouter);
app.use("/api/drink", drinkRouter);
app.use("/api/food", wineRouter);
app.use("/api/orders",orderRouter);
