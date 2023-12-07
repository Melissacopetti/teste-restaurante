export interface IWineDB {
    id: number;
    nome: string;
    descricao?: string;
    valor: number;
    imagem_url?: string;
    tipo: string;
  }
  
  export interface IWineItem {
    id: number;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    type: string;
  }
  
  export class Wine {
    constructor(private id: number, private wineItem: IWineItem) {}
  
    public getId = () => this.id;
  
    public getWineItem = () => this.wineItem;
  }
  