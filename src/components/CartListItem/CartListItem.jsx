import React from 'react';

const CartListItem = ({ cart, addPhoneInCart, removePhoneFromCart, deletePurchasedPhone }) => {
  const { name, url, count, totalPrice, id } = cart;

  return (
    <div className="cart-list-item">
      <div className="cart-list-item__header">
        <div className="cart-list-item__image">
          <img src={url} alt="Телефон" />
        </div>
        <h4 className='cart-list-item__name'>{name}</h4>
      </div>
      <div>
        <button className="button-cart" onClick={() => addPhoneInCart(id)}>+</button>
        <span className="cart-list-item__count">{count}</span>
        <button className="button-cart" onClick={() => removePhoneFromCart(id)}>-</button>
      </div>
      <span className="cart-list-item__total-price">{totalPrice}</span>
      <button className="cart-list-item__delete" onClick={() => deletePurchasedPhone(id)}>Удалить</button>
    </div>
  )
};

export default CartListItem;