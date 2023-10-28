import React from 'react'

import useDeleteData from '../../../../Hooks/useDeleteData';
import useCounter from '../../../../Hooks/useCounter';
export default function CartProduct(props) {



  const supabaseUrl = 'https://lbrhzsukxnnsrsprqlbu.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxicmh6c3VreG5uc3JzcHJxbGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0NDYzODQsImV4cCI6MjAwNjAyMjM4NH0.-mX3zwMpJYdBMRDKaEpBISBM25WPzfM1UhSLf-unS3M';
 
  const [deleteProductHandler] = useDeleteData(supabaseUrl, supabaseKey)

  const [minusCount, count, plusCount] = useCounter(1)
  

  
  return (
    <>
      <div className="cart__products" data-aos="fade-left">
        <img src="/images/icons/x.svg" alt="icon" className="cart__products__delete-btn" onClick={() => deleteProductHandler(props.id)} />
        <img src={props.image1} alt="img" className="cart__products__image" />
        <h3 className="cart__products__title">{props.title}</h3>
        <div className="cart__products__counter__wrapper">
          <span className="cart__products__minus-counter" onClick={minusCount}>-</span>
            <h3 className="cart__products__counter">{count}</h3>
          <span className="cart__products__plus-counter" onClick={plusCount}>+</span>
        </div>
        <h3 className="cart__products__off-price">€{props.offPrice * count}</h3>
      </div>
    </>
  )
}
