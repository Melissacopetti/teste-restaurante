import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import FoodCard from "../Components/FoodCard"; // Certifique-se de criar este componente
import { CardLista, TitleH1, TitleMenu } from "../components/Styled";

function FoodMenu(props) {
  const { addToCart } = props;

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/food`) // Substitua pelo endpoint correto para alimentos
      .then((res) => {
        setFoods(res.data.foods);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <TitleMenu>
        <TitleH1>Pratos</TitleH1>
      </TitleMenu>
      <CardLista>
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} addToCart={addToCart} />
        ))}
      </CardLista>
    </div>
  );
}

export default FoodMenu;
