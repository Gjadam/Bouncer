import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js';
import './Cart.css'
import CartProduct from './CartProduct';
import CartEmpty from './CartEmpty';
import StoreLoader from '../Store/StoreLoader'
export default function Cart() {


    const [Products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [getData, setGetData] = useState(false)

    let totalPrice = 0;

    const supabaseUrl = 'https://lbrhzsukxnnsrsprqlbu.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxicmh6c3VreG5uc3JzcHJxbGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0NDYzODQsImV4cCI6MjAwNjAyMjM4NH0.-mX3zwMpJYdBMRDKaEpBISBM25WPzfM1UhSLf-unS3M';
    const supabase = createClient(supabaseUrl, supabaseKey);

    async function fetchData() {


        const { data, error } = await supabase
            .from('Cart')
            .select('*');

        if (error) {
            console.error(error);
        } else {
            setProducts(data)
            setIsLoading(false);
            setGetData(prev => !prev)
        }
    }

    useEffect(() => {
        fetchData();
    }, [getData]);



    
    Products.map(product => (
        totalPrice += product.offPrice
    ))


    return (
        <div className='container'>
            <div className="cart">
                <div className="cart__title">
                    <h3 className="cart__title__product-name">PRODUCTS</h3>
                </div>      
                {isLoading ? (
                    <StoreLoader />
                ) : (
                    Products.length > 0 ? (
                        Products.map(product => (
                            <>
                                <CartProduct key={product.id} {...product} />
                            </>
                    
                        ))
                        
                    ) : (
                        <CartEmpty />
                    )
                )}
                <div className="cart__check-out">
                    <div className="cart__check-out__total-price">
                        <h1 className="cart__check-out__total-price__title">TOTAL</h1>
                        <h1 className="cart__check-out__total-price__price">€{totalPrice}</h1>
                    </div>
                    <Link to='' className="cart__check-out__btn">
                        <h3 className="cart__check-out__btn__link">Check out</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}
