import React, { useState, useEffect } from "react";

const ButtonInCart = ({
  cartList,
  id,
  addProductInCart,
  removeProductFromCart,
}) => {
  const [itemInCart, setItemInCart] = useState(false);
  const item = cartList.filter((item) => item.id === id);

  useEffect(() => {
    if (item.length > 0) {
      setItemInCart(true);
      return;
    }
    setItemInCart(false);
  }, [cartList]);

  return itemInCart ? (
    <button className="button" onClick={() => removeProductFromCart(id)}>
      Товар в корзині
    </button>
  ) : (
    <button className="button" onClick={() => addProductInCart(id)}>
      Добавити
    </button>
  );
};

export default ButtonInCart;
