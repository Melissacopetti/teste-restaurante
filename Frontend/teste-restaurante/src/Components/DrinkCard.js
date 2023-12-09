import React from "react";
import { Button, CardA, Tags, TicketPrice, Title,  } from "./Styled";

const DrinkCard = (props) => {
    const { drink, addToCart } = props;

    return (
        <div>
            <main>
                <Tags>
                    <Title>{drink.name}</Title>
                    <p>{drink.description}</p>
                    <span>Type: {drink.type}</span>

                </Tags>
                <TicketPrice>
                    <h3>
                        {drink.price.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </h3>
                </TicketPrice>
                <Button onClick={() => addToCart(drink)}>
                    Adicionar no carrinho
                </Button>
            </main>
        </div>
    );
};

export default DrinkCard;