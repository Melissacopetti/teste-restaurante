import { WineDatabase } from "../database/WineDatabase";
import { IGetWinesOutputDTO, Wine } from "../models/Wine";
import { IdGenerator } from "../services/IdGenerator";

export class WineBusiness {
  constructor(
    private wineDatabase: WineDatabase,
    private idGenerator: IdGenerator
  ) {}

  public getWines = async (): Promise<IGetWinesOutputDTO> => {
    const winesDB = await this.wineDatabase.getWines();

    const wines: Wine[] = [];

    for (let wineDB of winesDB) {
      const wine = new Wine(
        wineDB.nome,
        wineDB.descricao,
        wineDB.valor,
        wineDB.imagem_url,
        wineDB.tipo
      );

      wines.push(wine);
    }

    const response: IGetWinesOutputDTO = {
      message: "Vinhos retornados com sucesso",
      wines: wines.map((wine) => ({
        name: wine.getName(),
        description: wine.getDescription(),
        price: wine.getPrice(),
        imageUrl: wine.getImageUrl(),
        type: wine.getType(),
      })),
    };
    return response;
  };
}
