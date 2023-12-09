import React from "react";
import OrderItemCard from "../components/OrderItemCard";
import { CardButton, CardCart, CardDetails, TextBody, Title } from "../components/Styled";

function OrderSummary(props) {
  const { cart, removeFromCart, total, confirmOrder } = props;

  const getItemLabel = (item) => {
    if (item.category === "food") {
      return "Comida";
    } else if (item.category === "drink") {
      return "Bebida";
    } else if (item.category === "wine") {
      return "Vinho";
    } else {
      return "Item Desconhecido";
    }
  };

  return (
    <CardCart>
      <CardDetails>
        <Title>Resumo do pedido</Title>
        <TextBody>
          {cart.map((item) => (
            <OrderItemCard
              key={item.name}
              item={item}
              removeFromCart={removeFromCart}
              itemLabel={getItemLabel(item)}
            />
          ))}
        </TextBody>
        <Title>
          Total: {total.toLocaleString("pt-br", { style: "currency", currency: "USD" })}
        </Title>
      </CardDetails>
      <CardButton onClick={confirmOrder}>Confirmar pedido</CardButton>
    </CardCart>
  );
}

export default OrderSummary;
