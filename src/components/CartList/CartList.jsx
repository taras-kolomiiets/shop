import React from "react";
import CartListItem from "../CartListItem";

const CartList = ({
  cartList,
  addPhoneInCart,
  removePhoneFromCart,
  deletePurchasedPhone,
}) => {
  return (
    <ul className="cart-list">
      {cartList.map((cart) => {
        const { id } = cart;

        return (
          <li key={id}>
            <CartListItem
              cart={cart}
              addPhoneInCart={addPhoneInCart}
              removePhoneFromCart={removePhoneFromCart}
              deletePurchasedPhone={deletePurchasedPhone}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CartList;
