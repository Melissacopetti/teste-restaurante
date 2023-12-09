import { WineController } from "../controller/WineController";
import { Router } from "express";
import { WineBusiness } from "../business/WineBusiness";
import { WineDatabase } from "../database/WineDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const wineRouter = Router();

const wineController = new WineController(
  new WineBusiness(new WineDatabase(), new IdGenerator())
);

wineRouter.get("/wines", wineController.getWines);

