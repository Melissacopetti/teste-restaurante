import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import WineCard from "../Components/WineCardCard"; // Certifique-se de criar este componente
import { CardLista, TitleH1, TitleMenu } from "../components/Styled";

function wineMenu(props) {
  const { addToCart } = props;

  const [wines, setWines] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/wine`) 
      .then((res) => {
        setWines(res.data.wines);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <TitleMenu>
        <TitleH1>Carta de Vinhos</TitleH1>
      </TitleMenu>
      <CardLista>
        {wines.map((wine) => (
          <WineCard key={wine.id} wine={wine} addToCart={addToCart} />
        ))}
      </CardLista>
    </div>
  );
}

export default wineMenu;
