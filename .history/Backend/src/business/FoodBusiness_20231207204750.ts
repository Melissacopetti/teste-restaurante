import { FoodDatabase } from "../database/FoodDatabase";
import { IGetFoodsOutputDTO, Food } from "../models/Food";
import { IdGenerator } from "../services/IdGenerator";

export class FoodBusiness {
  constructor(
    private foodDatabase: FoodDatabase,
    private idGenerator: IdGenerator
  ) {}

  public getFoods = async (): Promise<IGetFoodsOutputDTO> => {
    const foodsDB = await this.foodDatabase.getFoods();

    const foods: Food[] = [];

    for (let foodDB of foodsDB) {
      const food = new Food(
        foodDB.nome,
        foodDB.descricao || "",
        foodDB.valor,
        foodDB.imagem_url,
        foodDB.tipo
      );

      foods.push(food);
    }

    const response: IGetFoodsOutputDTO = {
      message: "Comidas retornadas com sucesso",
      foods: foods.map((food) => ({
        name: food.getName(),
        description: food.getDescription(),
        price: food.getPrice(),
        imageUrl: food.getImageUrl(),
        type: food.getType(),
      })),
    };
    return response;
  };
}
