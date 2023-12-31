import { orderRouter } from './router/orderRouter';
import { foodRouter} from "./router/foodRouter";
import { drinkRouter} from "./router/drinkRouter";
import { pingRouter } from "./router/pingRouter";
import { wineRouter} from "./router/wineRouter";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});

app.use("/ping", pingRouter);
app.use("/api/", pizzaRouter);
app.use("/api/orders",orderRouter);
