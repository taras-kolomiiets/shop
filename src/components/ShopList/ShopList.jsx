import React from "react";
import ShopListItem from "../ShopListItem";

const ShopList = ({ phones, addPhoneInCart }) => {
  return (
    <section className="shop-list">
      <ul className="shop-list__list">
        {
          // Перебираем массив объектов, передавая каждый в компонент CartListItem.
          // В li передаём key, равный id и говорим, что при клике на элемент вызывается переданная функция, принимая id элемента
          phones.map((phone) => {
            const { id } = phone;

            return (
              <li
                key={id.toString()}
                className="shop-list__item"
                onClick={() => addPhoneInCart(id)}
              >
                <ShopListItem phone={phone} />
              </li>
            );
          })
        }
      </ul>
    </section>
  );
};

export default ShopList;
