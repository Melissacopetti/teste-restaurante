import { orderRouter } from './router/orderRouter';
import { foodRouter} from "./router/foodRouter";
import { dringRouter} from "./router/foodRouter";
import { foodRouter} from "./router/foodRouter";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pingRouter } from "./router/pingRouter";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});

app.use("/ping", pingRouter);
app.use("/api/pizza", pizzaRouter);
app.use("/api/orders",orderRouter);
