import React from 'react'

export default function FooterBottomItem(props) {
    return (
        <>
            <div className="footer-bottom__item">
                <ul className="footer-bottom__links">
                    <h1 className="footer-bottom__links__title">{props.title}</h1>
                    <li className="footer-bottom__link">
                        <a href="#" className="footer-bottom__link__btn">{props.textRow1}</a>
                    </li>
                    <li className="footer-bottom__link">
                        <a href="#" className="footer-bottom__link__btn">{props.textRow2}</a>
                    </li>
                    <li className="footer-bottom__link">
                        <a href="#" className="footer-bottom__link__btn">{props.textRow3}</a>
                    </li>
                    <li className="footer-bottom__link">
                        <a href="#" className="footer-bottom__link__btn">{props.textRow4}</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
