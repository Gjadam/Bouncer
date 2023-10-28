import React from 'react'
import { createClient } from '@supabase/supabase-js';

export default function useDeleteData(supabaseUrl, supabaseKey) {

    const supabase = createClient(supabaseUrl, supabaseKey);

    const deleteData = async (productId) => {
      const { error } = await supabase
        .from('Cart')
        .delete()
        .eq('id', productId);
  
      if (error) {
        console.error(error);
        return;
      }
  
    };
  
    function deleteProductHandler(id) {
      deleteData(id)
    }

    return [deleteProductHandler]
  
}
