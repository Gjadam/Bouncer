import { NavLink } from "react-router-dom"

export default function HeaderLink(props) {

  return (
      <>
          <NavLink to={props.pathName} className="header__link">{props.title}</NavLink>
      </>
  )
}
