export interface IFoodDB {
    id: number;
    nome: string;
    descricao?: string;
    valor: number;
    imagem_url?: string;
    tipo: string;
  }
  
  export interface IFoodItem {
    id: number;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    type: string;
  }
  
  export class Food {
    constructor(private id: number, private foodItem: IFoodItem) {}
  
    public getId = () => this.id;
  
    public getFoodItem = () => this.foodItem;
  }
  