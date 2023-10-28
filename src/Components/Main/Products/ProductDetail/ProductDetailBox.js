import React, { useState, useEffect } from 'react'
import './ProductDetailBox.css'
import { Link } from 'react-router-dom'
import ProductBoxInfo from './ProductBoxInfo';

import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode'
import BestSellerProductBox from '../../BestSeller/BestSellerProductBox';
import useGetData from '../../../../Hooks/useGetData';
import useInsertData from '../../../../Hooks/useInsertData';
export default function ProductDetailBox(props) {

    const supabaseUrl = 'https://lbrhzsukxnnsrsprqlbu.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxicmh6c3VreG5uc3JzcHJxbGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0NDYzODQsImV4cCI6MjAwNjAyMjM4NH0.-mX3zwMpJYdBMRDKaEpBISBM25WPzfM1UhSLf-unS3M';
    
    const[addToCartHandler] = useInsertData(props)
    const[Products] = useGetData(supabaseUrl, supabaseKey)

  
    return (
        <div className='container'>
            <div className="product-box" data-aos="fade-up">
                <div className="product-box__modal">
                    <div className="product-box__modal__icon">
                        <div class="success-animation">
                            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                        </div>
                    </div>
                    <div className="product-box__modal__text"></div>
                    <h1 className="product-box__modal__text__title">Product Added</h1>
                </div>
                <div className="product-box__image__wrapper">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}

                    >
                        <SwiperSlide><img src={props.image1} alt="img" className="product-box__image" /></SwiperSlide>
                        <SwiperSlide><img src={props.image2} alt="img" className="product-box__image" /></SwiperSlide>
                        <SwiperSlide><img src={props.image3} alt="img" className="product-box__image" /></SwiperSlide>

                    </Swiper>
                </div>
                <div className="product-box__detail">
                    <h1 className="product-box__detail__title">{props.title}</h1>
                    <div className="product-box__detail__prices">
                        <h3 className="product-box__detail__off-price">€{props.offPrice}</h3>
                        <h3 className="product-product-box__detail__price">€{props.price}</h3>
                    </div>
                    <div className="product-box__detail__information">
                        <ProductBoxInfo title="Availability :" value="In stock" />
                        <ProductBoxInfo title="Category :" value={props.category} />
                    </div>
                    {props.category === 'iphone' &&
                        <div className="product-box__detail__size">
                            <h3 className="product-box__detail__size__title">size</h3>
                            <select className='product-box__detail__size__box'>
                                <option value="XS">XS</option>
                                <option value="XR">XR</option>
                            </select>
                        </div>
                    }
                    <div className="product-box__detail__Description">
                        <h3 className="product-box__detail__size__title">Description :</h3>
                        <h3 className="product-box__detail__Description__text"> {props.desc} </h3>
                    </div>
                    <div className="product-box__detail__add-product__wrapper">
                        <Link to='' className="product-box__detail__add-product__link__wrapper" onClick={(e) => addToCartHandler(e)}>
                            <img src="/images/icons/shop-icon-2.svg" alt="" className="product-box__detail__add-product__link__icon" />
                            <h3 className="product-box__detail__add-product__link">Add To Cart</h3>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="related-products">
                <div className="related-products__title__wrapper">
                    <h1 className="related-products__title">RELATED PRODUCTS</h1>
                </div>
                <div className="related-products__products-wrapper">
                    <Swiper
                        FreeMode={true}
                        grabCursor={true}
                        modules={[FreeMode]}
                        className='mySwiper'
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            990: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1400: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },

                        }}
                    >

                        {Products.map(product => (
                            props.category == product.category &&
                            <SwiperSlide>
                                <BestSellerProductBox key={product.id}  {...product} />
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>

            </div>
        </div>
    )
}
