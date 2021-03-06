import React from "react";
import CartListItem from "../CartListItem";

const CartList = ({
  storageCartList,
  addProductInCart,
  removeProductFromCart,
  deletePurchasedProduct,
}) => {
  const totalSum = Object.values(storageCartList)
    .map((value) => value.totalPrice)
    .reduce((sum, item) => (sum += item), 0);

  return storageCartList.length ? (
    <>
      <ul className="cart-list">
        {storageCartList.map((cart) => {
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
      {totalSum && (
        <h2 className="cart__total-price">
          Загальна сума:{" "}
          <span className="cart__total-price-number">{totalSum} $</span>
        </h2>
      )}
    </>
  ) : (
    <h1 className="header__empty-cart">Ваша корзина пуста!</h1>
  );
};

export default CartList;
