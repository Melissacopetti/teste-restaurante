import { Request, Response } from "express";
import { WineBusiness } from "../business/WineBusiness";
import { BaseError } from "../errors/BaseError";

export class WineController {
  constructor(private wineBusiness: WineBusiness) {}

  public getWines = async (req: Request, res: Response) => {
    try {
      const response = await this.wineBusiness.getWines();
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
