import React from 'react'
import { NavLink } from 'react-router-dom'


export default function BestSellerLinks(props) {
  return (
    <>
      <NavLink to={props.pathName} className={(link) => link.isActive ? "-active" : 'best-seller__link'}>{props.title}</NavLink>
    </>
  )
}
