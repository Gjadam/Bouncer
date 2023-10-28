import React, { useEffect, useState } from 'react'
import './CmsProducts.css'
import CmsProduct from './CmsProduct'
import StoreLoader from '../Products/Store/StoreLoader';
import { createClient } from "@supabase/supabase-js";
export default function CmsProducts() {
    const [newProductTitle, setNewProductTitle] = useState('')
    const [newProductPrice, setNewProductPrice] = useState()
    const [newProductOffPrice, setNewProductOffPrice] = useState()
    const [newProductCategory, setNewProductCategory] = useState('')
    const [newProductImage1, setNewProductImage1] = useState('')
    const [newProductImage2, setNewProductImage2] = useState('')
    const [newProductImage3, setNewProductImage3] = useState('')
    const [newProductDesc, setNewProductDesc] = useState('')
    const [getData, setGetData] = useState(false)

    const supabaseUrl = 'https://lbrhzsukxnnsrsprqlbu.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxicmh6c3VreG5uc3JzcHJxbGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0NDYzODQsImV4cCI6MjAwNjAyMjM4NH0.-mX3zwMpJYdBMRDKaEpBISBM25WPzfM1UhSLf-unS3M';
    const supabase = createClient(supabaseUrl, supabaseKey);

    //Get Data 

    const [Products, setProducts] = useState([])

    async function fetchData() {
        const { data, error } = await supabase
            .from('Products')
            .select('*');

        if (error) {
            console.error(error);
        } else {
            setProducts(data)
            setGetData(prev => !prev)
        }
    }

    useEffect(() => {
        fetchData();
    }, [getData]);

    // Insert Data
    const InsertProducts = (e) => {
        e.preventDefault()
        const insertData = async () => {
            const { error } = await supabase
                .from("Products")
                .insert([
                    {
                        title: newProductTitle,
                        price: newProductPrice,
                        offPrice: newProductOffPrice,
                        category: newProductCategory,
                        image1: newProductImage1,
                        image2: newProductImage2,
                        image3: newProductImage3,
                        desc: newProductDesc,
                    },
                ]);

            if (error) {
                console.error(error);
            }
        };

        insertData()
        setNewProductTitle('')
        setNewProductPrice('')
        setNewProductOffPrice('')
        setNewProductCategory('')
        setNewProductImage1('')
        setNewProductImage2('')
        setNewProductImage3('')
        setNewProductDesc('')
    }

    return (
        <div className="cms__right-side">
            <div className="cms__right-side__insert-products">
                <h1 className="cms__right-side__insert-products__title">Add New Product</h1>
                <div className="cms__right-side__insert-products__inputs">
                    <input type="text" className="cms__right-side__insert-products__input" placeholder='Enter the product name' value={newProductTitle} onChange={(event) => setNewProductTitle(event.target.value)} />
                    <input type="number" className="cms__right-side__insert-products__input" placeholder='Enter the price of the product' value={newProductPrice} onChange={(event) => setNewProductPrice(event.target.value)} />
                    <input type="number" className="cms__right-side__insert-products__input" placeholder='Enter the final price of the product' value={newProductOffPrice} onChange={(event) => setNewProductOffPrice(event.target.value)} />
                    <input type="text" className="cms__right-side__insert-products__input" placeholder='Enter the product category' value={newProductCategory} onChange={(event) => setNewProductCategory(event.target.value)} />
                    <input type="text" className="cms__right-side__insert-products__input" placeholder='Enter the product image 1' value={newProductImage1} onChange={(event) => setNewProductImage1(event.target.value)} />
                    <input type="text" className="cms__right-side__insert-products__input" placeholder='Enter the product image 2' value={newProductImage2} onChange={(event) => setNewProductImage2(event.target.value)} />
                    <input type="text" className="cms__right-side__insert-products__input" placeholder='Enter the product image 3' value={newProductImage3} onChange={(event) => setNewProductImage3(event.target.value)} />
                    <input type="text" className="cms__right-side__insert-products__input" placeholder='Enter the product description' value={newProductDesc} onChange={(event) => setNewProductDesc(event.target.value)} />
                </div>
                <a href="" className="cms__right-side__insert-products__submit" onClick={InsertProducts}>Insert</a>
                <div className="cms__right-side__insert-products__product">
                    <h1 className="cms__right-side__insert-products__product__title">Products</h1>
                    {Products.length > 0 ? (
                        Products.map(product => (
                            <>
                                <CmsProduct key={product} {...product} />
                            </>

                        ))
                    ) : (
                        <StoreLoader />
                    )}
                </div>
            </div>
        </div>
    )
}
