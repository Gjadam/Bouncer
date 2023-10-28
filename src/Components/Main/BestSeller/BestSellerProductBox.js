import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function BestSellerProductBox(props) {
    let params = useParams()

    function toUpClickHandler() {
        window.scrollTo(0, 100)
    }

    return (
        <>
            <div className="best-seller__product" data-aos="fade-left">
                <div className="best-seller__product__image__wrapper">
                    <img src={props.image1} alt="img" className="best-seller__product__image" />
                </div>
                <div className="best-seller__product__btns">
                    <Link to={`/${params.shopID}/${props.id}`} className="best-seller__product__btn" onClick={toUpClickHandler}>
                        <h6 className="best-seller__product__btn__text">View Product</h6>
                    </Link>
                </div>
                <h3 className="best-seller__product__title">{props.title}</h3>
                <div className="best-seller__product__prices">
                    <h3 className="best-seller__product__price">€{props.offPrice}</h3>
                    <h3 className="best-seller__product__off-price">€{props.price}</h3>
                </div>
            </div>
        </>
    )
}
