import { WineController } from "../controller/WineController";
import { Router } from "express";
import { WineBusiness } from "../business/WineBusiness";
import { WineDataBase } from "../database/WineDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const wineRouter = Router();

const wineController = new WineController(
  new WineBusiness(new WineDataBase(), new IdGenerator())
);

wineRouter.get("/", wineController.getWines);
// Adicione outras rotas específicas para vinhos, se necessário
