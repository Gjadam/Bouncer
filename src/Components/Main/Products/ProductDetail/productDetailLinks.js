import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import ProductDetailBox from './ProductDetailBox';
import StoreLoader from '../../Products/Store/StoreLoader'

export default function ProductDetailLinks() {

    const [Products, setProducts] = useState([])
 
    let params = useParams()
    let product = Products.find(item => item.id == params.productID)


    const supabaseUrl = 'https://lbrhzsukxnnsrsprqlbu.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxicmh6c3VreG5uc3JzcHJxbGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0NDYzODQsImV4cCI6MjAwNjAyMjM4NH0.-mX3zwMpJYdBMRDKaEpBISBM25WPzfM1UhSLf-unS3M';
    const supabase = createClient(supabaseUrl, supabaseKey);

    async function fetchData() {
        const { data, error } = await supabase
            .from('Products')
            .select('*');

        if (error) {
            console.error(error);
        } else {
            setProducts(data)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <>
    {product ? (
      <ProductDetailBox {...product} />
    ) : (
      <StoreLoader />
    )}

    </>
  )
}
