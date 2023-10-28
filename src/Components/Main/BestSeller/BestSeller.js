import React, { useState, useEffect } from 'react'
import './BestSeller.css'
import BestSellerLinks from './BestSellerLinks'
import linksTitle from './BestSellerDatas'
import BestSellerProducts from './BestSellerProducts'
import { Routes, Route, Link } from 'react-router-dom'
import StoreLoader from '../Products/Store/StoreLoader'
import useGetData from '../../../Hooks/useGetData'

export default function BestSeller() {

    const [Links, setLinks] = useState(linksTitle)

    const supabaseUrl = 'https://lbrhzsukxnnsrsprqlbu.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxicmh6c3VreG5uc3JzcHJxbGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0NDYzODQsImV4cCI6MjAwNjAyMjM4NH0.-mX3zwMpJYdBMRDKaEpBISBM25WPzfM1UhSLf-unS3M';
    
    const[Products] = useGetData(supabaseUrl, supabaseKey)
   


    function toUpClickHandler () {
        window.scrollTo(0, 100)
    }


    return (
        <div className='container'>
            <div className="best-seller">
                <h1 className="best-seller__title">BEST SELLER</h1>
                <div className="best-seller__links">
                    {Links.map(link => (
                        <BestSellerLinks key="link.id" {...link} />
                    ))}
                </div>
                <div className="best-seller__products">
                {Products.length > 0 ? (
                        Products.map(product => (
                            <>
                                <Routes key={product.id}>
                                    <Route path=':productID' element={<BestSellerProducts {...product} />}></Route>
                                </Routes>
                            </>

                        ))
                    ) : (
                        <StoreLoader />
                    )}

                </div>
                <div className="best-seller__load-more">
                    <Link to="/shop-store" className="best-seller__load-more__btn" onClick={toUpClickHandler}>LOAD MORE</Link>
                </div>
            </div>
        </div>
    )
}


