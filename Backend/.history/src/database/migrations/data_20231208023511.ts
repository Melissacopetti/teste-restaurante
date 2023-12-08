import {
    IFoodDB,
    IDrinkDB,
    IWineDB,
  } from "./../../models/Restaurant"; // Certifique-se de importar as interfaces corretas do seu modelo
  
  export const foodsSeed: IFoodDB[] = [
    {
      nome: "Spaghetti à Carbonara",
      descricao: "Massa italiana cozida al dente, misturada com bacon crocante, queijo parmesão, ovos e pimenta preta.",
      valor: 35.00,
      imagem_url: "https://pubimg.band.uol.com.br/files/0822bea4be3a5c712aa3.png",
      tipo: "Italiano",
    },
    // Adicione mais itens de comida conforme necessário
  ];
  
  export const drinksSeed: IDrinkDB[] = [
    {
      nome: "Margarita Clássica",
      descricao: "Uma mistura refrescante de tequila, licor de laranja, suco de limão e gelo, servida com uma borda de sal no copo.",
      valor: 20.00,
      imagem_url: "https://img.freepik.com/fotos-premium/coquetel-de-margarita-bebida-classica-de-tequila-com-suco-de-limao-em-um-copo-de-coquetel-de-borda-salgada-e-uma-fatia-de-limao_484521-117.jpg?w=740",
      tipo: "Coquetel",
    },
    // Adicione mais itens de bebida conforme necessário
  ];
  
  export const winesSeed: IWineDB[] = [
    {
      nome: "Château Margaux (Grand Cru Classé)",
      descricao: "Um vinho tinto de Bordeaux, França, conhecido por sua elegância e complexidade, com notas de frutas vermelhas, especiarias e taninos suaves.",
      valor: 800.00,
      imagem_url: "https://cdn.awsli.com.br/300x300/1972/1972753/produto/209577954/image3-removebg-preview-hlmmhp.jpg",
      tipo: "Vinho Tinto",
    },
    // Adicione mais itens de vinho conforme necessário
  ];
  