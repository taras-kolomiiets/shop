import React from "react";

const CartListItem = ({
  cart,
  addProductInCart,
  removeProductFromCart,
  deletePurchasedProduct,
}) => {
  const { name, url, count, totalPrice, id } = cart;

  return (
    <div className="cart-list-item">
      <div className="cart-list-item__header">
        <div className="cart-list-item__image">
          <img src={url} alt="Продукт" />
        </div>
        <h4 className="cart-list-item__name">{name}</h4>
      </div>
      <div>
        <button className="button-cart" onClick={() => addProductInCart(id)}>
          +
        </button>
        <span className="cart-list-item__count">{count}</span>
        <button
          className="button-cart"
          onClick={() => removeProductFromCart(id)}
        >
          -
        </button>
      </div>
      <span className="cart-list-item__total-price">{totalPrice} $</span>
      <button
        className="button delete"
        onClick={() => deletePurchasedProduct(id)}
      >
        Видалити товар
      </button>
    </div>
  );
};

export default CartListItem;
