import { IOrderDB, IOrderItemDB } from "../models/Order";
import { BaseDatabase } from "./BaseDatabase";
import { FoodDatabase } from "./FoodDatabase";
import { DrinkDatabase } from "./DrinkDatabase";
import { WineDatabase } from "./WineDatabase";

export class OrderDatabase extends BaseDatabase {
  public static TABLE_ORDER_ITEMS = "pedidos_itens";  // Nome da tabela de pedidos
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
      .where({ order_id: orderId });

    return result;
  };

getPrice(itemName: string): Promise<number | undefined> {
  const result: any[] = await BaseDatabase.connection(FoodDatabase.TABLE_FOODS)
    .select("price")
    .where({ name: itemName });

  return result[0]?.price as number;
}

  
  
  private getTableByItemType = (itemType: string): string => {
    switch (itemType) {
      case "comida":
        return FoodDatabase.TABLE_FOODS;
      case "bebidas":
        return DrinkDatabase.TABLE_DRINKS;
      case "vinhos":
        return WineDatabase.TABLE_WINES;
      default:
        throw new Error("Tipo de item inválido");
    }
  };
  
}
