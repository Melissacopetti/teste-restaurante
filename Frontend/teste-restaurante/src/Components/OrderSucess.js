import React from "react";

const OrderSuccess = (props) => {
  const { order, closePopup } = props;

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
    <div>
      <h2>Pedido Realizado com sucesso!</h2>
      <h3>Resumo do Pedido:</h3>
      <p>número do pedido: {order.id}</p>
      {order.items.map((item) => (
        <p key={item.name}>
          {getItemLabel(item)} {item.name} -{" "}
          {item.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "USD",
          })}{" "}
          X {item.quantity}
        </p>
      ))}
      <p>
        Total pago:{" "}
        {order.total.toLocaleString("pt-br", {
          style: "currency",
          currency: "USD",
        })}{" "}
      </p>
      <span className="close-popup" onClick={closePopup}>
        x
      </span>
    </div>
  );
};

export default OrderSuccess;
