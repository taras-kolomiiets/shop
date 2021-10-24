import React from "react";
import CartListItem from "../CartListItem";

const CartList = ({
  cartList,
  addProductInCart,
  removeProductFromCart,
  deletePurchasedProduct,
}) => {
  return (
    <ul className="cart-list">
      {cartList.map((cart) => {
        const { id } = cart;

        return (
          <li key={id}>
            <CartListItem
              cart={cart}
              addProductInCart={addProductInCart}
              removeProductFromCart={removeProductFromCart}
              deletePurchasedProduct={deletePurchasedProduct}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CartList;
