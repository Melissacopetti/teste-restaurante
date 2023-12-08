import { DrinkController } from "../controller/DrinkController";
import { Router } from "express";
import { DrinkBusiness } from "../business/DrinkBusiness";
import { DrinkDataBase } from "../database/DrinkDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const drinkRouter = Router();

const drinkController = new DrinkController(
  new DrinkBusiness(new DrinkDataBase(), new IdGenerator())
);

drinkRouter.get("/", drinkController.getDrinks);
// Adicione outras rotas específicas para bebidas, se necessário
