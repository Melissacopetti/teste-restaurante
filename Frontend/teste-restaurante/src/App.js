import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [ cart, setCart ] = useState([])
  const [ total, setTotal ] = useState(0)

  const [orderSuccessPopupState, setOrderSuccessPopupState] = useState({
    isActive: false,
    summary: {
      id: null,
      items: null,  // Agora se refere a "items" ao invés de "pizzas"
      total: null
    }
  });
  
  useEffect(() => {
    calculateTotal();
  }, [cart]);
  
  const addToCart = (itemToAdd) => {
    const foundIndex = cart.findIndex((itemInCart) => {
      return itemInCart.name === itemToAdd.name;
    });
  
    if (foundIndex >= 0) {
      const newCart = [...cart];
      newCart[foundIndex].quantity += 1;
  
      setCart(newCart);
    } else {
      const newCart = [...cart];
      const newItem = {
        name: itemToAdd.name,
        price: itemToAdd.price,
        quantity: 1
      };
  
      newCart.push(newItem);
  
      setCart(newCart);
    }
  };
  
  const removeFromCart = (itemToRemove) => {
    if (itemToRemove.quantity > 1) {
      const newCart = cart.map((item) => {
        if (item.name === itemToRemove.name) {
          item.quantity -= 1;
        }
  
        return item;
      });
  
      setCart(newCart);
    } else {
      const newCart = cart.filter((item) => {
        return item.name !== itemToRemove.name;
      });
  
      setCart(newCart);
    }
  };
  
  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  
    setTotal(total);
  };
  const confirmOrder = async () => {
    try {
      const body = {
        items: cart  // Substitui "pizzas" por "items"
      };
  
      const res = await axios.post(`${BASE_URL}/orders`, body);
  
      setOrderSuccessPopupState({
        isActive: true,
        summary: res.data.order
      });
  
      setCart([]);
    } catch (error) {
      console.log(error);
    }
  };
  
  const closePopup = () => {
    setOrderSuccessPopupState({
      isActive: false,
      summary: {
        id: null,
        items: null,  // Substitui "pizzas" por "items"
        total: null
      }
    });
  };
  
  
  return (
    <div>
      <main>
      <PizzasMenu addToCart={addToCart} />
        <OrderSummary
          cart={cart}
          removeFromCart={removeFromCart}
          total={total}
          confirmOrder={confirmOrder}
        />

        {orderSuccessPopupState.isActive && (
          <OrderSucess
            order={orderSuccessPopupState.summary}
            closePopup={closePopup}
          />
        )}
      </main>
      </div>
  );
}

export default App;
