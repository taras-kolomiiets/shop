import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { products } from "../../products";
import CartList from "../CartList";
import ShopList from "../ShopList";
import Navigation from "../navigation";
import productImage from "../../images/product.jpg";

const updateCartList = (cartList, newProduct, index) => {
  if (newProduct.count === 0) {
    return [...cartList.slice(0, index), ...cartList.slice(index + 1)];
  }
  if (index === -1) {
    return [...cartList, newProduct];
  }
  return [
    ...cartList.slice(0, index),
    newProduct,
    ...cartList.slice(index + 1),
  ];
};

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

  const storageCartList = JSON.parse(localStorage.getItem("cart")) || [];

  const updateProductInCart = (id, count) => {
    const getProduct = products.find((product) => product.id === id);
    const getProductIndex = cartList.findIndex((product) => product.id === id);
    const productInCart = cartList[getProductIndex];

    const newProduct = updateProduct(getProduct, productInCart, count);
    const newArray = updateCartList(cartList, newProduct, getProductIndex);

    storageCartList.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(newArray));

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
      <Switch>
        <Route
          exact
          path={["/", "/shop"]}
          render={() => (
            <ShopList
              cartList={cartList}
              products={products}
              addProductInCart={addProductInCart}
              removeProductFromCart={removeProductFromCart}
            />
          )}
        />
        <Route
          path="/cart-list"
          exact
          render={() => {
            return (
              <CartList
                storageCartList={storageCartList}
                addProductInCart={addProductInCart}
                removeProductFromCart={removeProductFromCart}
                deletePurchasedProduct={deletePurchasedProduct}
              />
            );
          }}
        />
      </Switch>
    </main>
  );
};

export default App;
