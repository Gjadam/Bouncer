import React, {useState} from 'react'
import './FooterBottom.css'
import FooterBottomItem from './FooterBottomItem'
import footerBottomData from './FooterBottomData'
export default function FooterBottom() {

    const [footerBottomItems, setFooterBottomItems] = useState(footerBottomData)
  return (
    <>
    <div className="container">
        <div className="footer-bottom">
            <div className="footer-bottom__items">
                {footerBottomItems.map(item => (
                    <FooterBottomItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    </div>
    <div className="footer-bottom__copy-right">
                <div className="footer-bottom__copy-right__left-side">
                    <h3 className="footer-bottom__copy-right__text">&copy; Created By THEGJAD</h3>
                </div>
                <div className="footer-bottom__copy-right__right-side">
                    <img src="/images/Footer/label-1.svg" alt="logo" className="footer-bottom__copy-right__label" />
                    <img src="/images/Footer/label-2.svg" alt="logo" className="footer-bottom__copy-right__label" />
                    <img src="/images/Footer/label-3.svg" alt="logo" className="footer-bottom__copy-right__label" />
                </div>
            </div>
    </>
  )
}
