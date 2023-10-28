
export default function HeaderProducts(props) {
    return (
        <>
            <div className="header-products__product">
                <div className="header-products__product__content__wrapper">
                    <h3 className="header-products__product__title">{props.title}</h3>
                    <h4 className="header-products__product__text">{props.desc}</h4>
                    <h3 className="header-products__product__price">${props.price}</h3>
                </div>
            </div>
        </>
    )
}
