import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import DrinkCard from "../Components/DrinkCard"; // Certifique-se de criar este componente
import { CardLista, TitleH1, TitleMenu } from "../components/Styled";

function drinkMenu(props) {
  const { addToCart } = props;

  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/drink`) // Substitua pelo endpoint correto para alimentos
      .then((res) => {
        setDrinks(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
    <TitleMenu>
      <TitleH1>Bebidas</TitleH1>
    </TitleMenu>
    <CardLista>
        {drinks.map((drink) => (
          <drinkCard key={drink.id} drink={drink} addToCart={addToCart} />
        ))}
          </CardLista>
          </div>
  );
}

export default drinkMenu;
