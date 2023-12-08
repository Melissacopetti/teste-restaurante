import { IDrinkDB } from "../../models/Drink";
import { IFoodDB } from "../../models/Food";
import { IWineDB } from "../../models/Wine";

  
  export const foodsSeed: IFoodDB[] = [
    {
      nome: "Spaghetti à Carbonara",
      descricao: "Massa italiana cozida al dente, misturada com bacon crocante, queijo parmesão, ovos e pimenta preta.",
      valor: 35.00,
      imagem_url: "https://pubimg.band.uol.com.br/files/0822bea4be3a5c712aa3.png",
      tipo: "Italiano",
    },
    {
      nome: "Sushi Combo",
      descricao: "Uma seleção variada de sushi, incluindo sashimi fresco, nigiri e rolos de maki.",
      valor: 50.00,
      imagem_url: "https://www.querouai.com.br/gestao/img/produtos/20_1798_20221026071017.jpeg",
      tipo: "Japonês",
    },
    {
      nome: "Frango ao Curry",
      descricao: "Cubos de frango cozidos em molho curry aromático, servidos com arroz basmati.",
      valor: 28.00,
      imagem_url: "https://i.panelinha.com.br/i1/228-bk-5378-frango-ao-curry-com-maca.webp",
      tipo: "Indiano",
    },
    {
      nome: "Hambúrguer Clássico",
      descricao: "Carne suculenta, queijo, alface, tomate e maionese, servido em um pão de brioche.",
      valor: 25.00,
      imagem_url: "https://img.freepik.com/fotos-premium/closeup-de-hamburguer-classico-com-hamburguer-de-carne-na-placa-de-madeira_219193-4702.jpg",
      tipo: "Americano",
    },
    {
      nome: "Paella Marinera",
      descricao: "Arroz espanhol cozido com açafrão, misturado com frutos do mar como camarões, mexilhões e lulas.",
      valor: 40.00,
      imagem_url: "https://images.pexels.com/photos/12419160/pexels-photo-12419160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tipo: "Espanhol",
    },

    {
      nome: "Pad Thai",
      descricao: "Macarrão de arroz frito com camarões, tofu, amendoins, brotos de feijão e coentro.",
      valor: 32.00,
      imagem_url: "https://s2.glbimg.com/sJdm9NnXnKlG8CQOQSr9ECbSGXA=/smart/e.glbimg.com/og/ed/f/original/2018/09/26/receita-pad-thai.jpg",
      tipo: "Tailandês",
    },
    {
      nome: "Filet Mignon com Molho de Vinho Tinto",
      descricao: "Bife de filet mignon grelhado, regado com molho de vinho tinto e acompanhado de batatas assadas.",
      valor: 45.00,
      imagem_url: "https://img.freepik.com/fotos-premium/file-mignon-com-molho-de-vinho-tinto_538646-8000.jpg?w=740",
      tipo: "Francês",
    },
    {
      nome: "Tacos de Carnitas",
      descricao: "Tortilhas de milho recheadas com carne de porco desfiada, cebola, coentro e molho de abacate.",
      valor: 18.00,
      imagem_url: "https://static01.nyt.com/images/2015/07/06/dining/06TACOS/06TACOS-articleLarge.jpg",
      tipo: "Mexicano",
    },
    {
      nome: "Salada Caesar com Frango Grelhado",
      descricao: "Alface romana, croutons, queijo parmesão e peito de frango grelhado, regados com molho Caesar.",
      valor: 22.00,
      imagem_url: "https://static.itdg.com.br/images/1200-630/a2fe6df32ab7cd575b5dd79519d7298e/123091-original.jpg",
      tipo: "Internacional",
    },
    {
      nome: "Ramen de Shoyu",
      descricao: "Tigela de macarrão japonês em caldo de shoyu, com fatias de carne de porco, ovo cozido e cebolinha.",
      valor: 30.00,
      imagem_url: "https://media-cdn.tripadvisor.com/media/photo-s/1c/a6/36/97/ramen-shoyu-classic.jpg",
      tipo: "Japonês",
    },
  ];
  
  export const drinksSeed: IDrinkDB[] = [
    {
      nome: "Margarita Clássica",
      descricao: "Uma mistura refrescante de tequila, licor de laranja, suco de limão e gelo, servida com uma borda de sal no copo.",
      valor: 20.00,
      imagem_url: "https://img.freepik.com/fotos-premium/coquetel-de-margarita-bebida-classica-de-tequila-com-suco-de-limao-em-um-copo-de-coquetel-de-borda-salgada-e-uma-fatia-de-limao_484521-117.jpg?w=740",
      tipo: "Coquetel",
    },
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
  