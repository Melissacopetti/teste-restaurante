import { IOrderItemDB, IOrderDB } from "../models/Order";
import { BaseDatabase } from "./BaseDatabase";
import { FoodDatabase } from "./FoodDatabase";
import { DrinkDatabase } from "./DrinkDatabase";
import { WineDatabase } from "./WineDatabase";

export class OrderDatabase extends BaseDatabase {
  public static TABLE_ORDER_ITEMS = "pedidos";  // Nome da tabela de pedidos
  public static TABLE_ORDERS = "pedidos";       // Nome da tabela de pedidos

  public createOrder = async (orderId: string): Promise<void> => {
    await BaseDatabase.connection(OrderDatabase.TABLE_ORDERS).insert({
      id: orderId,
    });
  };

  public insertItemOnOrder = async (orderItem: IOrderItemDB): Promise<void> => {
    await BaseDatabase.connection(OrderDatabase.TABLE_ORDER_ITEMS).insert(
      orderItem
    );
  };

  public getOrders = async (): Promise<IOrderDB[]> => {
    const result: IOrderDB[] = await BaseDatabase.connection(
      OrderDatabase.TABLE_ORDERS
    ).select();
    return result;
  };

  public getOrderItem = async (orderId: string): Promise<IOrderItemDB[]> => {
    const result: IOrderItemDB[] = await BaseDatabase.connection(
      OrderDatabase.TABLE_ORDER_ITEMS
    )
      .select()
      .where({ id: orderId });  // Atualizado para buscar pelo ID do pedido
    return result;
  };

  public getPrice = async (itemName: string, itemType: string): Promise<number | undefined> => {
    const result: any[] = await BaseDatabase.connection(
    switch (itemType) {
      case "comida":
        table = FoodDatabase.TABLE_FOODS;
        break;
      case "bebida":
        table = DrinkDatabase.TABLE_DRINKS;
        break;
      case "vinho":
        table = WineDatabase.TABLE_WINES;
        break;
      default:
        throw new Error("Tipo de item inválido");
    }

    const result: any[] = await BaseDatabase.connection(table)
      .select("valor")
      .where({ nome: itemName });

    return result[0]?.valor as number;
  };
}
