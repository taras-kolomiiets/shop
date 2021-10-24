import React from "react";
import ShopListItem from "../ShopListItem";

const ShopList = ({ products, addProductInCart }) => {
  return (
    <section className="shop-list">
      <ul className="shop-list__list">
        {
          // Перебираем массив объектов, передавая каждый в компонент CartListItem.
          // В li передаём key, равный id и говорим, что при клике на элемент вызывается переданная функция, принимая id элемента
          products.map((product) => {
            const { id } = product;

            return (
              <li
                key={id.toString()}
                className="shop-list__item"
                onClick={() => addProductInCart(id)}
              >
                <ShopListItem product={product} />
              </li>
            );
          })
        }
      </ul>
    </section>
  );
};

export default ShopList;
