import React from "react";

import ButtonInCart from "./ButtonInCart";
import productImage from "../../images/product.jpg";

const ShopListItem = ({
  cartList,
  product,
  addProductInCart,
  removeProductFromCart,
}) => {
  const { name, label, price, id } = product;

  return (
    <div className="shop-list-item">
      <div className="shop-list-item__header">
        <div className="shop-list-item__image">
          <img
            src={productImage}
            alt="Картинка продукту"
            className="shop-list-item__url"
          />
        </div>
        <h3 className="shop-list-item__name">{name}</h3>
      </div>
      <div className="shop-list-item__content">
        <p className="shop-list-item__description">{label}</p>
        <span className="shop-list-item__price">Ціна: {price} $</span>
      </div>
      <ButtonInCart
        cartList={cartList}
        id={id}
        addProductInCart={addProductInCart}
        removeProductFromCart={removeProductFromCart}
      />
    </div>
  );
};

export default ShopListItem;
