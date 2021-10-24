import React, { useState } from "react";
import { Route } from "react-router-dom";

import { products } from "../../products";
import CartList from "../CartList";
import ShopList from "../ShopList";
import Navigation from "../navigation";
import productImage from "../../images/product.jpg";

// Обновляем массив
// Принимает три аргумента: массив phones, элемент который нужно обновить, индекс этого элемента
const updateCartList = (cartList, newProduct, index) => {
  // Если количество одного телефона равняется 0, убрать его из корзины
  if (newProduct.count === 0) {
    return [...cartList.slice(0, index), ...cartList.slice(index + 1)];
  }

  // Если индекс элемента -1, это значит что в корзине нет этого телефона
  // И его нужно добавить
  if (index === -1) {
    return [...cartList, newProduct];
  }

  // Если этот телефон есть, то массив нужно обновить
  // Телефон, будь он обычным или обновлённым получаем из второго аргумента
  // Таким образом вычисление, и структура объекта телефона находится в updatePhone
  return [
    ...cartList.slice(0, index),
    newProduct,
    ...cartList.slice(index + 1),
  ];
};

// Функция, занимающаяся проверкой и структурой телефона
// Принимает три параметра, полученный телефон, телефон в корзине (если тот есть), и количество которое нужно купить
// Если телефон в корзине есть, то возвращаем все поля телефона, изменяя его totalPrice и count, которое зависит от количества купленного
// Если телефона в корзине нет, то возвращаем объект, который содержит нужные для дальнейшего поля
const updateProduct = (getProduct, ProductInCart, quantity) => {
  if (ProductInCart) {
    return {
      ...ProductInCart,
      totalPrice: ProductInCart.totalPrice + quantity * getProduct.price,
      count: ProductInCart.count + quantity,
    };
  }

  return {
    id: getProduct.id,
    name: getProduct.name,
    url: productImage,
    totalPrice: getProduct.price,
    count: 1,
  };
};

const App = () => {
  const [cartList, setCartList] = useState([]);

  const updateProductInCart = (id, count) => {
    const getProduct = products.find((product) => product.id === id);
    const getProductIndex = cartList.findIndex((product) => product.id === id);
    const productInCart = cartList[getProductIndex];

    const newProduct = updateProduct(getProduct, productInCart, count);
    const newArray = updateCartList(cartList, newProduct, getProductIndex);

    return newArray;
  };

  const addProductInCart = (id) => {
    setCartList(updateProductInCart(id, 1));
  };

  const removeProductFromCart = (id) => {
    setCartList(updateProductInCart(id, -1));
  };

  const deletePurchasedProduct = (id) => {
    setCartList(() => {
      const getProductIndex = cartList.findIndex(
        (product) => product.id === id
      );
      const productInCart = cartList[getProductIndex];
      setCartList(updateProductInCart(id, -productInCart.count));
    });
  };

  return (
    <main className="app">
      <Navigation />
      <Route
        path="/"
        exact
        render={() => (
          <ShopList products={products} addProductInCart={addProductInCart} />
        )}
      />
      <Route
        path="/cart-list"
        exact
        render={() => {
          return (
            <CartList
              cartList={cartList}
              addProductInCart={addProductInCart}
              removeProductFromCart={removeProductFromCart}
              deletePurchasedProduct={deletePurchasedProduct}
            />
          );
        }}
      />
    </main>
  );
};

export default App;

// class App extends Component {
//   state = {
//     cartList: [],
//   };

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
//   addProductInCart = (id) => {
//     const { cartList } = this.state;

//     this.setState(() => {
//       const getProduct = products.find((product) => product.id === id);
//       const getProductIndex = cartList.findIndex(
//         (product) => product.id === id
//       );
//       const productInCart = cartList[getProductIndex];

//       const newProduct = updateProduct(getProduct, productInCart, 1);
//       const newArray = updateCartList(cartList, newProduct, getProductIndex);

//       return {
//         cartList: newArray,
//       };
//     });
//   };

//   removeProductFromCart = (id) => {
//     const { cartList } = this.state;

//     this.setState(() => {
//       const getProduct = products.find((product) => product.id === id);
//       const getProductIndex = cartList.findIndex(
//         (product) => product.id === id
//       );
//       const productInCart = cartList[getProductIndex];

//       const newPhone = updateProduct(getProduct, productInCart, -1);
//       const newArray = updateCartList(cartList, newPhone, getProductIndex);

//       return {
//         cartList: newArray,
//       };
//     });
//   };

//   deletePurchasedProduct = (id) => {
//     const { cartList } = this.state;

//     this.setState(() => {
//       const getProduct = products.find((product) => product.id === id);
//       const getProductIndex = cartList.findIndex(
//         (product) => product.id === id
//       );
//       const productInCart = cartList[getProductIndex];

//       const newProduct = updateProduct(
//         getProduct,
//         productInCart,
//         -productInCart.count
//       );
//       const newArray = updateCartList(cartList, newProduct, getProductIndex);

//       return {
//         cartList: newArray,
//       };
//     });
//   };

//   render() {
//     return (
//       <main className="app">
//         <Navigation />
//         <Route
//           path="/"
//           exact
//           render={() => {
//             return (
//               <ShopList
//                 phones={products}
//                 addPhoneInCart={this.addProductInCart}
//               />
//             );
//           }}
//         />
//         <Route
//           path="/cart-list"
//           exact
//           render={() => {
//             return (
//               <CartList
//                 cartList={this.state.cartList}
//                 addPhoneInCart={this.addProductInCart}
//                 removePhoneFromCart={this.removeProductFromCart}
//                 deletePurchasedPhone={this.deletePurchasedProduct}
//               />
//             );
//           }}
//         />
//       </main>
//     );
//   }
// }

// export default App;
