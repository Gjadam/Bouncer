import React from 'react'
import { createClient } from "@supabase/supabase-js";
export default function CmsProduct(props) {
    const supabaseUrl = 'https://lbrhzsukxnnsrsprqlbu.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxicmh6c3VreG5uc3JzcHJxbGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0NDYzODQsImV4cCI6MjAwNjAyMjM4NH0.-mX3zwMpJYdBMRDKaEpBISBM25WPzfM1UhSLf-unS3M';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Delete Data
    const deleteData = async (productId) => {
        const { error } = await supabase
            .from('Products')
            .delete()
            .eq('id', productId);

        if (error) {
            console.error(error);
            return;
        }

    };

    function deleteProduct (id,event) {
        event.preventDefault()
        deleteData(id)
    }

    return (
        <>
            <div className="cms__right-side__insert-products__product__content">
                <img src={props.image1} alt="image" className="cms__right-side__insert-products__product__content__image" />
                <h3 className="cms__right-side__insert-products__product__content__name">{props.title}</h3>
                <h3 className="cms__right-side__insert-products__product__content__price">€{props.offPrice}</h3>
                <div className="cms__right-side__insert-products__product__content__btns">
                    <a href="" className="cms__right-side__insert-products__product__content__btn">Detail</a>
                    <a href="" className="cms__right-side__insert-products__product__content__btn">Update</a>
                    <a href="" className="cms__right-side__insert-products__product__content__btn" onClick={(event) => deleteProduct(props.id, event)}>Delete</a>
                </div>
            </div>
        </>
    )
}
