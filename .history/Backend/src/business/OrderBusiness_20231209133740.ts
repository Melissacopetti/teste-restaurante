import {
  ICreateOrderInputDTO,
  ICreateOrderOutputDTO,
  IGetOrdersOutputDTO,
  IOrderItem,
  IOrderItemDB
} from "../models/Order";
import { ParamsError } from "../errors/ParamsError";
import { OrderDatabase } from "../database/OrderDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { NotFoundError } from "../errors/NotFoundError";
import { Order } from "../models/Order";
import { DataConversionService } from "../services/DataConversion";

export class OrderBusiness {
  constructor(
    private orderDatabase: OrderDatabase,
    private idGenerator: IdGenerator,
    private dataConversionService: DataConversionService
  ) {}

  public createOrder = async (
    input: ICreateOrderInputDTO
  ): Promise<ICreateOrderOutputDTO> => {
    const itemsInput = input.items;

    if (itemsInput.length === 0) {
      throw new ParamsError("Pelo menos um item deve ser escolhido");
    }

    const items: IOrderItem[] = itemsInput.map((item) => {
      if (item.quantity <= 0) {
        throw new ParamsError("Quantidade inválida, escolha pelo menos 1");
      }
      return {
        id: this.idGenerator.generate(),
        item_name: item.name,
        item_type: item.type,
        quantity: item.quantity,
        price: 0,
        order_id: this.dataConversionService.convertOrderId(item.order_id).toString(),
      };
    });
    

    for (let item of items) {
      const price = await this.orderDatabase.getPrice(item.item_name);

      if (!price) {
        throw new NotFoundError("Item não encontrado");
      }

      item.price = price;
    }

    const orderId = this.idGenerator.generate();

    await this.orderDatabase.createOrder(orderId);

    for (let item of items) {
      const orderItem: IOrderItemDB = {
        id: this.idGenerator.generate(),
        item_name: item.item_name,
        item_type: item.item_type,
        quantity: item.quantity,
        order_id: orderId,
      };
      await this.orderDatabase.insertItemOnOrder(orderItem);
    }

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const response: ICreateOrderOutputDTO = {
      message: "Pedido realizado com sucesso!",
      order: {
        id: orderId,
        items: items.map((item) => ({
          name: item.item_name,
          type: item.item_type,
          quantity: item.quantity,
          price: item.price,
          order_id: item.order_id, // Adicione o campo order_id
        })),
        total,
      },
    };
    
    return response;
  }
 
  public getOrders = async (): Promise<IGetOrdersOutputDTO> => {
    const ordersDB = await this.orderDatabase.getOrders();

    const orders: Order[] = [];

    for (let orderDB of ordersDB) {
        const order = new Order(IrderDB.id, []);
        const orderItemsDB: IOrderItemDB[] = await this.orderDatabase.getOrderItem(order.getId());

        for (let orderItemDB of orderItemsDB) {
            const price = await this.orderDatabase.getPrice(orderItemDB.item_name);
            orderItemDB.price = price;
        }

        order.setOrderItems(orderItemsDB);
        orders.push(order);
    }

    const response: IGetOrdersOutputDTO = {
        orders: orders.map((order) => ({
            id: order.getId().toString(), // Assuming you want the ID as a string in the response
            items: order
                .getOrderItems()
                .map((item) => ({
                    name: item.item_name,
                    type: item.item_type,
                    quantity: item.quantity,
                    price: item.price,
                    order_id: item.order_id,
                })),
            total: order.getTotal(),
        })),
    };

    return response;
};

}
