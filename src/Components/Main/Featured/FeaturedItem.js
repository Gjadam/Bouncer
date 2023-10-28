import React from 'react'

export default function FeaturedItem(props) {
    return (
        <>
            <div className="featured__item">
                <div className="featured__item__image__wrapper">
                    <img src={props.imgUrl} alt="img" className="featured__item__image" />
                </div>
                <div className="featured__item__content__wrapper">
                    <h1 className="featured__item__content__title">{props.title}</h1>
                    <div className="featured__item__content__prices">
                        <h3 className="featured__item__content__price">€{props.price}</h3>
                        <h3 className="featured__item__content__off-price">€{props.offPrice}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
