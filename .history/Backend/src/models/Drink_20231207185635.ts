export interface IDrinkDB {
    id: number;
    nome: string;
    descricao?: string;
    valor: number;
    imagem_url?: string;
    tipo: string;
  }
  
  export interface IDrinkItem {
    id: number;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    type: string;
  }
  
  export class Drink {
    constructor(private id: number, private drinkItem: IDrinkItem) {}
  
    public getId = () => this.id;
  
    public getDrinkItem = () => this.drinkItem;
  }
  