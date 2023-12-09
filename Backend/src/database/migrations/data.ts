import { IDrinkDB } from "../../models/Drink";
import { IFoodDB } from "../../models/Food";
import { IWineDB } from "../../models/Wine";

  
  export const foodsSeed: IFoodDB[] = [
    {
      "id": 11456,
      "nome": "Tacos de Carnitas",
      "descricao": "Tortilhas de milho recheadas com carne de porco desfiada, cebola, coentro e molho de abacate.",
      "valor": 18.00,
      "imagem_url": "https:\/\/static01.nyt.com\/images\/2015\/07\/06\/dining\/06TACOS\/06TACOS-articleLarge.jpg",
      "tipo": "Mexicano"
  },
  {
      "id": 11715,
      "nome": "Frango ao Curry",
      "descricao": "Cubos de frango cozidos em molho curry aromático, servidos com arroz basmati.",
      "valor": 28.00,
      "imagem_url": "https:\/\/i.panelinha.com.br\/i1\/228-bk-5378-frango-ao-curry-com-maca.webp",
      "tipo": "Indiano"
  },
  {
      "id": 11864,
      "nome": "Sushi Combo",
      "descricao": "Uma seleção variada de sushi, incluindo sashimi fresco, nigiri e rolos de maki.",
      "valor": 50.00,
      "imagem_url": "https:\/\/www.querouai.com.br\/gestao\/img\/produtos\/20_1798_20221026071017.jpeg",
      "tipo": "Japonês"
  },
  {
      "id": 11970,
      "nome": "Paella Marinera",
      "descricao": "Arroz espanhol cozido com açafrão, misturado com frutos do mar como camarões, mexilhões e lulas.",
      "valor": 40.00,
      "imagem_url": "https:\/\/images.pexels.com\/photos\/12419160\/pexels-photo-12419160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "tipo": "Espanhol"
  },
  {
      "id": 12064,
      "nome": "Hambúrguer Clássico",
      "descricao": "Carne suculenta, queijo, alface, tomate e maionese, servido em um pão de brioche.",
      "valor": 25.00,
      "imagem_url": "https:\/\/img.freepik.com\/fotos-premium\/closeup-de-hamburguer-classico-com-hamburguer-de-carne-na-placa-de-madeira_219193-4702.jpg",
      "tipo": "Americano"
  },
  {
      "id": 15813,
      "nome": "Filet Mignon com Molho de Vinho Tinto",
      "descricao": "Bife de filet mignon grelhado, regado com molho de vinho tinto e acompanhado de batatas assadas.",
      "valor": 45.00,
      "imagem_url": "https:\/\/img.freepik.com\/fotos-premium\/file-mignon-com-molho-de-vinho-tinto_538646-8000.jpg?w=740",
      "tipo": "Francês"
  },
  {
      "id": 16833,
      "nome": "Spaghetti à Carbonara",
      "descricao": "Massa italiana cozida al dente, misturada com bacon crocante, queijo parmesão, ovos e pimenta preta.",
      "valor": 35.00,
      "imagem_url": "https:\/\/pubimg.band.uol.com.br\/files\/0822bea4be3a5c712aa3.png",
      "tipo": "Italiano"
  },
  {
      "id": 17428,
      "nome": "Pad Thai",
      "descricao": "Macarrão de arroz frito com camarões, tofu, amendoins, brotos de feijão e coentro.",
      "valor": 32.00,
      "imagem_url": "https:\/\/s2.glbimg.com\/sJdm9NnXnKlG8CQOQSr9ECbSGXA=\/smart\/e.glbimg.com\/og\/ed\/f\/original\/2018\/09\/26\/receita-pad-thai.jpg",
      "tipo": "Tailandês"
  },
  {
    "id": 17486,
    "nome": "Salada Caesar com Frango Grelhado",
    "descricao": "Alface romana, croutons, queijo parmesão e peito de frango grelhado, regados com molho Caesar.",
    "valor": 22.00,
    "imagem_url": "https:\/\/static.itdg.com.br\/images\/1200-630\/a2fe6df32ab7cd575b5dd79519d7298e\/123091-original.jpg",
    "tipo": "Internacional"
}
  ];
  
  export const drinksSeed: IDrinkDB[] = [
    {
      "id": 10961,
      "nome": "Chá Gelado de Pêssego",
      "descricao": "Chá preto gelado adoçado, infundido com sabores naturais de pêssego, servido com gelo.",
      "valor": 7.00,
      "imagem_url": "https:\/\/img.freepik.com\/fotos-gratis\/copo-com-sabor-de-cha-gelado-de-pessego_23-2148550531.jpg",
      "tipo": "Chá"
  },
  {
      "id": 12200,
      "nome": "Martini de Maçã",
      "descricao": "Vodka de maçã, licor de maçã verde e um toque de suco de limão, agitados e coados.",
      "valor": 22.00,
      "imagem_url": "https:\/\/bartenderstore.com.br\/wp-content\/uploads\/2021\/03\/capa-01capa-app-1.jpg",
      "tipo": "Coquetel"
  },
  {
      "id": 14115,
      "nome": "Coquetel Sem Álcool de Melancia e Manjericão",
      "descricao": "Uma mistura refrescante de suco de melancia, limão, xarope de manjericão e água com gás.",
      "valor": 12.00,
      "imagem_url": "https:\/\/s2.glbimg.com\/7QJf0_MtaNJR4n3U6Fsz6sPviFY=\/512x320\/smart\/e.glbimg.com\/og\/ed\/f\/original\/2021\/09\/24\/receita-drinque-luna-rosa-gin-melancia-gengibre-limao-gael.jpg",
      "tipo": "Coquetel Não Alcoólico"
  },
  {
      "id": 15036,
      "nome": "Margarita Clássica",
      "descricao": "Uma mistura refrescante de tequila, licor de laranja, suco de limão e gelo, servida com uma borda de sal no copo.",
      "valor": 20.00,
      "imagem_url": "https:\/\/img.freepik.com\/fotos-premium\/coquetel-de-margarita-bebida-classica-de-tequila-com-suco-de-limao-em-um-copo-de-coquetel-de-borda-salgada-e-uma-fatia-de-limao_484521-117.jpg?w=740",
      "tipo": "Coquetel"
  },
  {
      "id": 16360,
      "nome": "Mojito de Morango",
      "descricao": "Rum branco misturado com morangos frescos, hortelã, açúcar, suco de limão e água com gás.",
      "valor": 18.00,
      "imagem_url": "https:\/\/img.freepik.com\/fotos-premium\/mojito-de-morango-coquetel-de-mojito-frio-de-verao-com-morangos-hortela-limao-e-gelo-em-um-copo-sobre-a-mesa_211786-502.jpg",
      "tipo": "Coquetel"
  },
  {
      "id": 16702,
      "nome": "Café Espresso",
      "descricao": "Um café concentrado e encorpado, preparado pressionando água quente através de grãos de café finamente moídos.",
      "valor": 5.00,
      "imagem_url": "https:\/\/1.bp.blogspot.com\/-sSKibBwIWnQ\/X95hxqpp32I\/AAAAAAAAAV0\/CnNPT19fmaUkOkdsyJwPyWOjxIzzguKygCLcBGAsYHQ\/s650\/xicara%2Bde%2Bcaf%25C3%25A9%2Bexpresso.png",
      "tipo": "Café"
  },
  {
      "id": 16810,
      "nome": "Smoothie de Berry Burst",
      "descricao": "Uma mistura cremosa de morangos, mirtilos, iogurte e mel, servida gelada.",
      "valor": 15.00,
      "imagem_url": "https:\/\/media.bluediamond.com\/uploads\/2023\/01\/24174524\/Triple_Berry_Blast_Smoothie_Photo.jpg",
      "tipo": "Smoothie"
  },
  {
      "id": 18495,
      "nome": "Cerveja Artesanal IPA",
      "descricao": "Uma cerveja pale ale com amargor intenso e aromas cítricos provenientes do lúpulo.",
      "valor": 25.00,
      "imagem_url": "https:\/\/cdnstatic8.com\/centralbrew.com.br\/blog\/wp-content\/uploads\/Receitas-de-cerveja-artesanal-4-estilos-f%C3%A1ceis-para-come%C3%A7ar-1.png",
      "tipo": "Cerveja"
  },
  {
      "id": 18807,
      "nome": "Água de Coco Gelada",
      "descricao": "Água natural de coco, servida bem gelada, uma opção refrescante e hidratante.",
      "valor": 10.00,
      "imagem_url": "https:\/\/encrypted-tbn0.gstatic.com\/images?q=tbn:ANd9GcRKxW2FLzTkfsiGmsBgg3kNIzh65Ae1YaMlzw&usqp=CAU",
      "tipo": "Bebida Não Alcoólica"
  },
  {
      "id": 19021,
      "nome": "Vinho Sauvignon Blanc",
      "descricao": "Vinho branco seco com notas cítricas e de frutas tropicais, ideal como aperitivo.",
      "valor": 35.00,
      "imagem_url": "https:\/\/cdn.mistral.com.br\/products\/31974\/img_m_31974.jpg",
      "tipo": "Vinho"
  }
];
  
  export const winesSeed: IWineDB[] = [
    {
      "id": 10188,
      "nome": "Barolo, Giacomo Conterno Monfortino Riserva",
      "descricao": "Um vinho tinto italiano da região de Piemonte, feito com uvas Nebbiolo, apresentando sabores intensos de cereja, alcatrão e especiarias.",
      "valor": 900.00,
      "imagem_url": "https:\/\/encrypted-tbn0.gstatic.com\/images?q=tbn:ANd9GcRzM9GezzkdDuA4qnIu7uvmdK7D1vZj450iQbA3QN_VUGGwoqp4eyL8_D_nGb0o_n7nIqk&usqp=CAU",
      "tipo": "Vinho Tinto"
  },
  {
      "id": 14334,
      "nome": "Domaine Laroche Chablis Premier Cru",
      "descricao": "Um vinho branco da região de Chablis, França, conhecido por sua mineralidade distinta, acidez refrescante e notas cítricas.",
      "valor": 150.00,
      "imagem_url": "https:\/\/d2r9epyceweg5n.cloudfront.net\/stores\/002\/905\/426\/products\/vinho-domaine-laroche-chablis-premier-cru-319518-089ee47df14c67998516970566831947-640-0.jpg",
      "tipo": "Vinho Branco"
  },
  {
      "id": 14615,
      "nome": "Château Margaux (Grand Cru Classé)",
      "descricao": "Um vinho tinto de Bordeaux, França, conhecido por sua elegância e complexidade, com notas de frutas vermelhas, especiarias e taninos suaves.",
      "valor": 800.00,
      "imagem_url": "[https:\/\/cdn.awsli.com.br\/300x300\/1972\/1972753\/produto\/209577954\/image3-removebg-preview-hlmmhp.jpg](https:\/\/cdn.awsli.com.br\/300x300\/1972\/1972753\/produto\/209577954\/image3-removebg-preview-hlmmhp.jpg)",
      "tipo": "Vinho Tinto"
  },
  {
      "id": 15114,
      "nome": "Penfolds Grange Shiraz",
      "descricao": "Um vinho tinto australiano, especialmente da região de Barossa Valley, conhecido por sua intensidade e complexidade, com sabores de ameixa, chocolate e carvalho.",
      "valor": 600.00,
      "imagem_url": "https:\/\/minuman.com\/cdn\/shop\/files\/image_39ae5f6e-8b53-418e-a3d0-f83b92b0d9a5_800x.jpg?v=1686632656",
      "tipo": "Vinho Tinto"
  },
  {
      "id": 19358,
      "nome": "Château Margaux (Grand Cru Classé)",
      "descricao": "Um vinho tinto de Bordeaux, França, conhecido por sua elegância e complexidade, com notas de frutas vermelhas, especiarias e taninos suaves.",
      "valor": 800.00,
      "imagem_url": "[https:\/\/cdn.awsli.com.br\/300x300\/1972\/1972753\/produto\/209577954\/image3-removebg-preview-hlmmhp.jpg](https:\/\/cdn.awsli.com.br\/300x300\/1972\/1972753\/produto\/209577954\/image3-removebg-preview-hlmmhp.jpg)",
      "tipo": "Vinho Tinto"
  },
  {
      "id": 19486,
      "nome": "Cloudy Bay Sauvignon Blanc",
      "descricao": "Um vinho branco da região de Marlborough, Nova Zelândia, reconhecido por seus aromas intensos de frutas tropicais, cítricas e notas herbáceas.",
      "valor": 120.00,
      "imagem_url": "https:\/\/www.casadabebida.com.br\/img\/products\/cloudy-bay-sauvignon-blanc-750-ml_1_650.jpg",
      "tipo": "Vinho Branco"
  }

  ];
  