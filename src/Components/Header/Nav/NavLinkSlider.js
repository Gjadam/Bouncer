import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinkSlider(props) {
  return (
    <>
        <NavLink to={props.pathName} className="nav-mobile__slider__item__link">{props.title}</NavLink>
    </>
  )
}
