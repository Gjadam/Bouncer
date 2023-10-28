import './HeaderContent.css'
import HeaderProducts from './HeaderProducts'
import { useState } from 'react'
import HeaderContentData from './HeaderContentData'
export default function HeaderContent() {

  const [Product, setProduct] = useState(HeaderContentData)

  return (
    <div>
      <div className="header-content">
        <div className="container">
          <div className="header-content__wrapper">
            <div className="header-content__left-side">
              <h1 className="header-content__title">iPhone X</h1>
              <h3 className="header-content__text">Discover a new horizon in your hands: iPhone X brings unparalleled technology and exceptional design together. The Super Retina display with high-resolution, infinite storage space, advanced camera, and powerful processor, all in one phone. With iPhone X, experience an unmatched journey through the world of technology.</h3>
              <a href="#" className="header-content__link">MORE</a>
            </div>
          </div>
        </div>
      </div>
          <div className="header-products">
            {Product.map(product => (
              <HeaderProducts key={product.id} {...product} />
            ))}
          </div>
    </div>
  )
}
