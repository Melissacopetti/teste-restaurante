import { FoodController } from "../controller/FoodController";
import { Router } from "express";
import { FoodBusiness } from "../business/FoodBusiness";
import { FoodDatabase } from "../database/FoodDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const foodRouter = Router();

const foodController = new FoodController(
  new FoodBusiness(new FoodDatabase(), new IdGenerator())
);

foodRouter.get("/", foodController.getFoods);
// Adicione outras rotas específicas para comidas, se necessário
