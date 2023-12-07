import { IWineDB, Wine } from "../models/Wine";
import { BaseDatabase } from "./BaseDatabase";

export class WineDatabase extends BaseDatabase {
  public static TABLE_WINES = "NomeDaSuaTabelaDeVinhos";

  public toWineDBModel = (wine: Wine): IWineDB => {
    return {
      nome: wine.getName(),
      descricao: wine.getDescription(),
      valor: wine.getPrice(),
      imagem_url: wine.getImageUrl(),
      tipo: wine.getType(),
    };
  };

  public getWines = async (): Promise<IWineDB[]> => {
    const result: IWineDB[] = await BaseDatabase.connection(
      WineDatabase.TABLE_WINES
    ).select();

    return result;
  };

  // Adapte conforme necessário para buscar os ingredientes ou realizar outras operações relacionadas aos vinhos
}
