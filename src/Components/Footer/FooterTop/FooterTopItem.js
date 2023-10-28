import React from 'react'

export default function FooterTopItem(props) {
    return (
        <>
            <div className="footer-top__item">
                <h1 className="footer-top__item__title">{props.title}</h1>
                <h3 className="footer-top__item__text">{props.text}</h3>
                <div className="footer-top__item__links">
                    <a href="#" className="footer-top__item__link">
                        <img src="images/icons/facebook.svg" alt="icon" className='footer-top__item__link__icon' />
                    </a>
                    <a href="#" className="footer-top__item__link">
                        <img src="images/icons/twitter.svg" alt="icon" className='footer-top__item__link__icon' />
                    </a>
                </div>
            </div>
        </>
    )
}
