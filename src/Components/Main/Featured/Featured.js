import React, { useState } from 'react'
import './Featured.css'
import FeaturedItem from './FeaturedItem'
import featuredContent from './FeaturedData'
export default function Featured() {

    const [featuredItems, setFeaturedItems] = useState(featuredContent)

    return (
        <div className='container'>
            <div className="featured">
                <h1 className="featured__title">FEATURED PRODUCTS</h1>
                <div className="featured__items">
                    {featuredItems.map(item => (
                        <FeaturedItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
