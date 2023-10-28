import React, { useState } from 'react'
import HeaderLink from './HeaderLink'
import './Nav.css'
import { headerLinks } from './HeaderData'
import NavLinkSlider from './NavLinkSlider'
import { Link, Routes, Route } from 'react-router-dom'

export default function Nav() {

    const [Links, setLinks] = useState(headerLinks)
    let flag = true

    function switchNavbarHandler() {
        let slider = document.querySelector('.nav-mobile__slider')
        
        if (flag) {
            slider.style.left = '0'
            flag = false
        } else {
            slider.style.left = '-40rem'
            flag = true
        }
    }


    return (
        <div className='container'>
            <div className="navbar">
                <form className="navbar__search-box">
                    <div class="group">
                        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input placeholder="Search" type="search" className="input" />
                    </div>
                </form>
                <div className="navbar__items-wrapper">
                    <a href="#" className="navbar__account">
                        <img src="/images/icons/user-icon.svg" alt="img" /> My profile
                    </a>
                    <Link to="/cart" className="navbar__shop">
                        <img src="/images/icons/shop-icon.svg" alt="img" /> Shop
                    </Link>
                    <Link to="/cms/products" className="navbar__account">
                        <img src="/images/icons/gear-icon.svg" alt="img" className='navbar__account__icon '/> 
                    </Link>
                </div>
            </div>
            <div className="header">
                <Link to='/' className="header__title">BOUNCER</Link>
                <div className="header__links">
                    {Links.map(link => (
                        <HeaderLink key={link.id} {...link} />

                    ))}
                </div>
                <div className="nav-mobile">
                    <div className="nav-mobile__slider">
                        <ul className="nav-mobile__slider__items">
                            {Links.map(link => (
                                <NavLinkSlider key={link.id} {...link} />
                            ))}
                        </ul>
                    </div>
                    <div className="nav-mobile__icon__wrapper" onClick={switchNavbarHandler}>
                        <img src="/images/icons/bars.png" alt="icon" className='nav-mobile__icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}
