export interface IFoodDB {
  id?: number; // Adicione o campo id como opcional, pois pode ser nulo ao inserir novos registros
  nome: string;
  descricao?: string;
  valor: number;
  imagem_url?: string;
  tipo: string;
}

export class Food {
  private id?: number; // Adicione o campo id como opcional
  constructor(
    private nome: string,
    private descricao: string | undefined,
    private valor: number,
    private imagem_url: string | undefined,
    private tipo: string
  ) {}

  public getId = (): number | undefined => this.id;
  public getName = (): string => this.nome;
  public getDescription = (): string | undefined => this.descricao;
  public getPrice = (): number => this.valor;
  public getImageUrl = (): string | undefined => this.imagem_url;
  public getType = (): string => this.tipo;
}

export interface IGetFoodsOutputDTO {
  message: string;
  foods: {
    name: string;
    description: string;
    price: number;
    imageUrl: string | null;
    type: string;
  }[];
}
