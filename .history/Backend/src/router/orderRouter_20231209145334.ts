import express, { Router } from "express";

import { OrderBusiness } from "../business/OrderBusiness";
import { OrderController } from "../controller/OrderController";
import { OrderDatabase } from "../database/OrderDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const orderRouter = express.Router();

const orderController = new OrderController(
  const orderBusiness = new OrderBusiness(
    new OrderDatabase(),
    new IdGenerator(),
    new DataConversionService()
  );
  
);

orderRouter.post("/create/order", orderController.createOrder);
orderRouter.get("/orders", orderController.getOrders);
