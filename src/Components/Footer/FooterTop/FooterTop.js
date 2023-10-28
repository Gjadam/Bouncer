import React, {useState} from 'react'
import './FooterTop.css'
import FooterTopItem from './FooterTopItem'
import footerTopData from './FooterTopData'
export default function FooterTop() {

    const [footerTopItems, setFooterTopItems] = useState(footerTopData)
    return (
        <div className='footer-top'>
            <div className="container">
                <div className="footer-top__items">
                    {footerTopItems.map(item => (
                        <FooterTopItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
