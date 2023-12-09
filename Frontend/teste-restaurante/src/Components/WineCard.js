const WineCard = (props) => {
    const { wine, addToCart } = props;
  
    return (
      <div>
        <CardA>
          <Tags>
            <Title>{wine.name}</Title>
            <p>{wine.description}</p>
            <span>Type: {wine.type}</span>
            </Tags>
          <TicketPrice>
            <h3>
              {wine.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
          </TicketPrice>
          <Button onClick={() => addToCart(wine)}>
            Adicionar no carrinho
          </Button>
        </CardA>
      </div>
    );
  };

  export default WineCard;