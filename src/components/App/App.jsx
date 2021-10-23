import React, { Component } from "react";

import { phones } from "../../phones";
import CartList from "../CartList";
import ShopList from "../ShopList";
import Navigation from "../navigation";

import { Route } from "react-router-dom";

// Обновляем массив
// Принимает три аргумента: массив phones, элемент который нужно обновить, индекс этого элемента
const updateCartList = (cartList, newPhone, index) => {
  // Если количество одного телефона равняется 0, убрать его из корзины
  if (newPhone.count === 0) {
    return [...cartList.slice(0, index), ...cartList.slice(index + 1)];
  }

  // Если индекс элемента -1, это значит что в корзине нет этого телефона
  // И его нужно добавить
  if (index === -1) {
    return [...cartList, newPhone];
  }

  // Если этот телефон есть, то массив нужно обновить
  // Телефон, будь он обычным или обновлённым получаем из второго аргумента
  // Таким образом вычисление, и структура объекта телефона находится в updatePhone
  return [...cartList.slice(0, index), newPhone, ...cartList.slice(index + 1)];
};

// Функция, занимающаяся проверкой и структурой телефона
// Принимает три параметра, полученный телефон, телефон в корзине (если тот есть), и количество которое нужно купить
// Если телефон в корзине есть, то возвращаем все поля телефона, изменяя его totalPrice и count, которое зависит от количества купленного
// Если телефона в корзине нет, то возвращаем объект, который содержит нужные для дальнейшего поля
const updatePhone = (getPhone, phoneInCart, quantity) => {
  if (phoneInCart) {
    return {
      ...phoneInCart,
      totalPrice: phoneInCart.totalPrice + quantity * getPhone.price,
      count: phoneInCart.count + quantity,
    };
  }

  return {
    id: getPhone.id,
    name: getPhone.name,
    url: getPhone.url,
    totalPrice: getPhone.price,
    count: 1,
  };
};

class App extends Component {
  state = {
    cartList: [],
  };

  // Функция получает на вход id элемента (повторение кода сознательное)
  // Что мы делаем?
  // 1. Получаем телефон из массива с телефонами благодаря принимаемому id
  // 2. Получаем индекс телефон из корзины по id, если тот конечно есть
  // 3. Если он есть, то получаем сам элемент: cartList[getPhoneIndex]
  // ---
  // Затем приступаем к изменению массива,
  // Используем updatePhone
  // Первая функция проверяет телефон и принимает два параметра. Первый - это телефон, которы получили, второй телефон в корзине.
  // Если этот телефон есть, возвращаем все его поля, изменяя лишь некоторые, если нет возвращаем нужный объект с телефоном
  // Используем updateCartList, который принмает три параметра: массив корзины, телефон, который хотим добавить, индекс телефона
  // Если индекс === -1, возвращаем весь массив корзины, добавляя телефон, если есть делаем операцию, которую можно посмотреть в функции
  addPhoneInCart = (id) => {
    const { cartList } = this.state;

    this.setState(() => {
      const getPhone = phones.find((phone) => phone.id === id);
      const getPhoneIndex = cartList.findIndex((phone) => phone.id === id);
      const phoneInCart = cartList[getPhoneIndex];

      const newPhone = updatePhone(getPhone, phoneInCart, 1);
      const newArray = updateCartList(cartList, newPhone, getPhoneIndex);

      return {
        cartList: newArray,
      };
    });
  };

  removePhoneFromCart = (id) => {
    const { cartList } = this.state;

    this.setState(() => {
      const getPhone = phones.find((phone) => phone.id === id);
      const getPhoneIndex = cartList.findIndex((phone) => phone.id === id);
      const phoneInCart = cartList[getPhoneIndex];

      const newPhone = updatePhone(getPhone, phoneInCart, -1);
      const newArray = updateCartList(cartList, newPhone, getPhoneIndex);

      return {
        cartList: newArray,
      };
    });
  };

  deletePurchasedPhone = (id) => {
    const { cartList } = this.state;

    this.setState(() => {
      const getPhone = phones.find((phone) => phone.id === id);
      const getPhoneIndex = cartList.findIndex((phone) => phone.id === id);
      const phoneInCart = cartList[getPhoneIndex];

      const newPhone = updatePhone(getPhone, phoneInCart, -phoneInCart.count);
      const newArray = updateCartList(cartList, newPhone, getPhoneIndex);

      return {
        cartList: newArray,
      };
    });
  };

  render() {
    return (
      <main className="app">
        <Navigation />
        <Route
          path="/"
          exact
          render={() => {
            return (
              <ShopList phones={phones} addPhoneInCart={this.addPhoneInCart} />
            );
          }}
        />
        <Route
          path="/cart-list"
          exact
          render={() => {
            return (
              <CartList
                cartList={this.state.cartList}
                addPhoneInCart={this.addPhoneInCart}
                removePhoneFromCart={this.removePhoneFromCart}
                deletePurchasedPhone={this.deletePurchasedPhone}
              />
            );
          }}
        />
      </main>
    );
  }
}

export default App;
