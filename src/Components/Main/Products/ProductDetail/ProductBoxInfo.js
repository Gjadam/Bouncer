import React from 'react'

export default function ProductBoxInfo(props) {
    return (
        <>
            <div className="product-box__detail__information__wrapper">
                <h3 className="product-box__detail__information__title">{props.title}</h3>
                <h4 className="product-box__detail__information__value">{props.value}</h4>
            </div>

        </>
    )
}
