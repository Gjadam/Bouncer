import React, {useState} from 'react'
import './News.css'
import newsContent from './NewsData'
import NewsItem from './NewsItem'
export default function News() {

    const [newsItems, setNewsItems] = useState(newsContent)

  return (
    <div className='container'>
        <div className="news">
            <h1 className="news__title">LATEST NEWS</h1>
            <div className="news__items">
                {newsItems.map(item => (
                    <NewsItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    </div>
  )
}
