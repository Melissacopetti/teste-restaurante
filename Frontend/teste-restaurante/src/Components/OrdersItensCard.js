import React from "react";
import { ButtonRemove } from "./Styled";

function OrderItemCard(props) {
  const { item, removeFromCart } = props;

  return (
    <div>
      <p>
        Item {item.name}-{" "}
        {item.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "USD",
        })}{" "}
        x {item.quantity}
      </p>
      <ButtonRemove onClick={() => removeFromCart(item)}>Remover item</ButtonRemove>
    </div>
  );
}

export default OrderItemCard;
