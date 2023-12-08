import { Request, Response } from "express";
import { FoodBusiness } from "../business/FoodBusiness";
import { BaseError } from "../errors/BaseError";

export class FoodController {
  constructor(private foodBusiness: FoodBusiness) {}

  public getFoods = async (req: Request, res: Response) => {
    try {
      const response = await this.foodBusiness.getFoods();
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
