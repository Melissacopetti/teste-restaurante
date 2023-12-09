import {
  ICreateOrderInputDTO,
  ICreateOrderOutputDTO,
  IGetOrdersOutputDTO,
  IOrderItem,
  IOrderItemDB,
  IOrderResume,
} from "../models/Order";
import { ParamsError } from "../errors/ParamsError";
import { OrderDatabase } from "../database/OrderDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { NotFoundError } from "../errors/NotFoundError";
import { Order } from "../models/Order"; // Certifique-se de importar a classe Order

export class OrderBusiness {
  constructor(
    private orderDatabase: OrderDatabase,
    private idGenerator: IdGenerator
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
        order_id: convertOrderId(item.order_id), // Use the converted order ID
      };
    });

    // Para cada item, obtenha o preço do banco de dados e atualize a propriedade 'price'
    for (let item of items) {
      const price = await this.orderDatabase.getPrice(item.item_name, item.item_type);

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
          order_id: item.order_id, // Add the order_id property
        })),
        total,
      },
    };

    return response;
  };

  public getOrders = async (): Promise<IGetOrdersOutputDTO> => {
    const ordersDB = await this.orderDatabase.getOrders();

    const orders: Order[] = [];

    for (let orderDB of ordersDB) {
      const order = new Order(
        convertOrderId(orderDB.id), // Use the converted order ID
        []
      );
      const orderItemsDB: IOrderItemDB[] = await this.orderDatabase.getOrderItem(order.getId());

      // Convert the order items from the database format to the Order format
      for (let orderItemDB of orderItemsDB) {
        order.setOrderItemsDB([
          {
            id: orderItemDB.id,
            item_name: orderItemDB.item_name,
            item_type: orderItemDB.item_type,
            quantity: orderItemDB.quantity,
            price: orderItemDB.price,
            order_id: orderItemDB.order_id, // Add the order_id property
