import React from "react";
import { Button, CardA, Tags, TicketPrice, Title,  } from "./Styled";

const FoodCard = (props) => {
    const { food, addToCart } = props;

    return (
        <div>
          <CardA>
            <Tags>
              <Title>{food.name}</Title>
              <p>{food.description}</p>
            </Tags>
            <TicketPrice>
              <h3>
                {food.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "USD",
                })}
              </h3>
            </TicketPrice>
            <Button onClick={() => addToCart(food)}>
              Adicionar no carrinho
            </Button>
          </CardA>
        </div>
      );
    };

    export default FoodCard;