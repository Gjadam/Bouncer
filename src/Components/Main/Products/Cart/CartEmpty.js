import React from 'react'
import './CartEmpty.css'
export default function CartEmpty() {
  return (
    <>
        <div className="cart-empty__wrapper">
            <img src="/images/icons/shop-empty.jpg" alt="icon" className="cart-empty__icon" />
            <h1 className="cart-empty__text">Shopping cart is empty</h1>
        </div>
    </>
  )
}
