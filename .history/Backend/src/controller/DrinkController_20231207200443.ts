import { Request, Response } from "express";
import { DrinkBusiness } from "../business/DrinkBusiness";
import { BaseError } from "../errors/BaseError";

export class DrinkController {
  constructor(private drinkBusiness: DrinkBusiness) {}

  public getDrinks = async (req: Request, res: Response) => {
    try {
      const response = await this.drinkBusiness.getDrinks();
      res.status(200).send(response);
    } catch (error) {
      console.log(error);
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado" });
    }
  };

 
}
