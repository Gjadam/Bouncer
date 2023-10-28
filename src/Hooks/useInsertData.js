import React from "react";
import { createClient } from "@supabase/supabase-js";

export default function useInsertData(props) {
  const supabaseUrl = "https://lbrhzsukxnnsrsprqlbu.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxicmh6c3VreG5uc3JzcHJxbGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0NDYzODQsImV4cCI6MjAwNjAyMjM4NH0.-mX3zwMpJYdBMRDKaEpBISBM25WPzfM1UhSLf-unS3M";
  const supabase = createClient(supabaseUrl, supabaseKey);

  function addToCartHandler() {
    let modal = document.querySelector(".product-box__modal");

    const insertData = async () => {
      const { error } = await supabase
        .from("Cart")
        .insert([
          {
            id: props.id,
            title: props.title,
            price: props.price,
            offPrice: props.offPrice,
            image1: props.image1,
            image2: props.image2,
            image3: props.image3,
          },
        ]);

      if (error) {
        console.error(error);
      }
    };

    // Modal
    modal.style.display = "flex";
    setInterval(() => {
      modal.style.display = "none";
    }, 5000);

    insertData();
  }

  return [addToCartHandler];
}
