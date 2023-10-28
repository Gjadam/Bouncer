import React, {useState, useEffect} from 'react'

export default function ProductCounter() {

    const [productCount, setProductCount] = useState(0)

    function minusClickHandler () {
        setProductCount(preCount => preCount <= 0 ? (preCount = 0) : (preCount - 1))
    }
    function plusClickHandler () {
        setProductCount(preCount => preCount + 1)
    }




    return (
        <>
            <div className="product-box__detail__counter">
                <h3 className="product-box__detail__counter__minus" onClick={minusClickHandler}>-</h3>
                <h3 className="product-box__detail__counter__count">{productCount}</h3>
                <h3 className="product-box__detail__counter__plus" onClick={plusClickHandler}>+</h3>
            </div>
        </>
    )
}
