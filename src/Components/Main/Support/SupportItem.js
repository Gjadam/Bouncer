import React from 'react'

export default function SupportItem(props) {
    return (
        <>
            <div className="support__item">
                <img src={props.imgUrl} alt="logo" className="support__item__icon" />
                <h1 className="support__item__title">{props.title}</h1>
                <h3 className="support__item__text">{props.text}</h3>
            </div>
        </>
    )
}
