import { IFoodDB, Food } from "../models/Food";
import { BaseDatabase } from "./BaseDatabase";

export class FoodDatabase extends BaseDatabase {
  public static TABLE_FOODS = "comidas";

  public toFoodDBModel = (food: Food): IFoodDB => {
    return {
      nome: food.getName(),
      descricao: food.getDescription(),
      valor: food.getPrice(),
      imagem_url: food.getImageUrl(),
      tipo: food.getType(),
    };
  };

  public getFoods = async (): Promise<IFoodDB[]> => {
    const result: IFoodDB[] = await BaseDatabase.connection(
      FoodDatabase.TABLE_FOODS
    ).select();

    return result;
  };

  // Adapte conforme necessário para buscar os ingredientes ou realizar outras operações relacionadas às comidas
}
