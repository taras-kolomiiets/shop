import React from "react";

import productImage from "../../images/product.jpg";

const ShopListItem = ({ product }) => {
  const { name, label, price } = product;

  return (
    <div className="shop-list-item">
      <div className="shop-list-item__header">
        <div className="shop-list-item__image">
          <img
            src={productImage}
            alt="Картинка телефона"
            className="shop-list-item__url"
          />
        </div>
        <h3 className="shop-list-item__name">{name}</h3>
      </div>
      <div className="shop-list-item__content">
        <p className="shop-list-item__description">{label}</p>
        <span className="shop-list-item__price">Цена: {price}</span>
      </div>
      <button className="button">Купить</button>
    </div>
  );
};

export default ShopListItem;
