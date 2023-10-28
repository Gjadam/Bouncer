import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js';

export default function useGetData(supabaseUrl, supabaseKey) {

    const [Products, setProducts] = useState([])


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

    return [Products, setProducts]
}
