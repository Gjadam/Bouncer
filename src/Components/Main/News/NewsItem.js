import React from 'react'

export default function NewsItem(props) {
    return (
        <>
            <div className="news__item">
                <div className="news__item__image__wrapper">
                    <img src={props.imgUrl} alt="img" className="news__item__image" />
                </div>
                <div className="news__item__content__wrapper">
                    <h5 className="news__item__content__date">{props.date}</h5>
                    <h3 className="news__item__content__title">{props.title}</h3>
                    <h4 className="news__item__content__text">{props.text}</h4>
                </div>
            </div>
        </>
    )
}
