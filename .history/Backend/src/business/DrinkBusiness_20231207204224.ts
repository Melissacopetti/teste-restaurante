import { DrinkDatabase } from "../database/DrinkDatabase";
import { IGetDrinksOutputDTO, Drink } from "../models/Drink";
import { IdGenerator } from "../services/IdGenerator";

export class DrinkBusiness {
  constructor(
    private drinkDatabase: DrinkDatabase,
    private idGenerator: IdGenerator
  ) {}

  public getDrinks = async (): Promise<IGetDrinksOutputDTO> => {
    const drinksDB = await this.drinkDatabase.getDrinks();

    const drinks: Drink[] = [];

    for (let drinkDB of drinksDB) {
      const drink = new Drink(
        drinkDB.nome,
        drinkDB.descricao || "",
        drinkDB.valor,
        drinkDB.imagem_url || null,
        drinkDB.tipo
      );

      drinks.push(drink);
    }

    const response: IGetDrinksOutputDTO = {
      message: "Bebidas retornadas com sucesso",
      drinks: drinks.map((drink) => ({
        name: drink.getName(),
        description: drink.getDescription(),
        price: drink.getPrice(),
        imageUrl: drink.getImageUrl(),
        type: drink.getType(),
      })),
    };
    return response;
  };
}

