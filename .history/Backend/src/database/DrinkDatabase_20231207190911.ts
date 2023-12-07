import { IDrinkDB, Drink } from "../models/Drink";
import { BaseDatabase } from "./BaseDatabase";

export class DrinkDatabase extends BaseDatabase {
  public static TABLE_DRINKS = "NomeDaSuaTabelaDeBebidas";

  public toDrinkDBModel = (drink: Drink): IDrinkDB => {
    return {
      nome: drink.getName(),
      descricao: drink.getDescription(),
      valor: drink.getPrice(),
      imagem_url: drink.getImageUrl(),
      tipo: drink.getType(),
    };
  };

  public getDrinks = async (): Promise<IDrinkDB[]> => {
    const result: IDrinkDB[] = await BaseDatabase.connection(
      DrinkDatabase.TABLE_DRINKS
    ).select();

    return result;
  };

}
