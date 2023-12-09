export interface IOrderItem {
  id: string;
  item_name: string;
  item_type: string;
  quantity: number;
  price: number;
  order_id: number;
}

export interface IOrder{
  id: string; 
}

  
export interface IOrderItemDB {
  id: string;
  item_name: string;
  item_type: string;
  quantity: number;
  order_id: number;
}


  export interface IOrderDB {
    id: number; // ALTERADO para número, assumindo que seja um identificador auto-incrementável
  }
  
  
  export interface IOrderItem {
    id: string;
    item_name: string;
    item_type: string;
    quantity: number;
    price: number;
    order_id: ; // Changed from string to number
  }
  
  export interface IOrderResume {
    id: string;
    items: {
      name: string;
      type: string;
      quantity: number;
      price: number;
      order_id:string;
    }[];
    total: number;
  }
  
  export class Order {
    private total: number = 0;
    constructor(private id: string, private orderItems: IOrderItem[]) {
      this.total = this.calculateTotal();
    }
  
    private calculateTotal = () => {
      const total = this.orderItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return total;
    };
  
    public getId = () => this.id;
  
    public getOrderItems = () => this.orderItems;
  
    public setOrderItems = (newOrderItems: IOrderItem[]) => {
      this.orderItems = newOrderItems;
      this.total = this.calculateTotal();  // Recalculate total when items are updated
    };
  
    public addOrderItem = (newOrderItem: IOrderItem) => {
      this.orderItems.push(newOrderItem);
      this.total = this.calculateTotal();  // Recalculate total when items are added
    };
  
    public removeOrderItem = (idToRemove: string) => {
      this.orderItems = this.orderItems.filter((item) => item.id !== idToRemove);
      this.total = this.calculateTotal();  // Recalculate total when items are removed
    };
  
    public getTotal = () => this.total;
  }
  
  export interface ICreateOrderInputDTO {
    items: {
      name: string;
      type: string;
      quantity: number;
    }[];
  }
  
  export interface ICreateOrderOutputDTO {
    message: string;
    order: IOrderResume;
  }
  
  export interface IGetOrdersOutputDTO {
    orders: IOrderResume[];
  }
  