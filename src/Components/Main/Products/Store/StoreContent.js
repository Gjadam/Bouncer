import React, { useState, useEffect, } from 'react'
import './StoreContent.css'
import StoreLinks from './StoreLinks'
import StoreLoader from './StoreLoader';
import useGetData from '../../../../Hooks/useGetData';

export default function StoreContent() {

    const supabaseUrl = 'https://lbrhzsukxnnsrsprqlbu.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxicmh6c3VreG5uc3JzcHJxbGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0NDYzODQsImV4cCI6MjAwNjAyMjM4NH0.-mX3zwMpJYdBMRDKaEpBISBM25WPzfM1UhSLf-unS3M';

    const [Products] = useGetData(supabaseUrl, supabaseKey)

    return (
        <>
            <div className='container'>
                <div className="store">
                    <div className="store__wrapper" >
                        <div className="store__products">
                            {Products.length > 0 ? (
                                Products.map(product => (
                                    <StoreLinks key={product.id} {...product} />
                                ))
                            ) : (
                                <StoreLoader />
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

