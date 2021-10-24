import React from "react";
import ShopListItem from "../ShopListItem";

const ShopList = ({
  products,
  addProductInCart,
  cartList,
  removeProductFromCart,
}) => {
  return (
    <section className="shop-list">
      <ul className="shop-list__list">
        {products.map((product) => {
          const { id } = product;

          return (
            <li key={id} className="shop-list__item">
              <ShopListItem
                removeProductFromCart={removeProductFromCart}
                cartList={cartList}
                product={product}
                addProductInCart={addProductInCart}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ShopList;
