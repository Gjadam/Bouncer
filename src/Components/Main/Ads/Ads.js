import React from 'react'
import './Ads.css'
export default function Ads() {
  return (
    <>
    <div className="ads">
      <div className="container">
        <div className="ads__wrapper">
          <div className="ads__left-side">
            <h1 className="ads__title">iPhone 6 Plus</h1>
            <h3 className="ads__text">Performance and design. Taken right to the edge.</h3>
            <a href="#" className="ads__link">SHOP NOW</a>
          </div>
          <div className="ads__right-side">
            <img src="/images/Main/Main-bg.png" alt="" className="ads__right-side__image" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
