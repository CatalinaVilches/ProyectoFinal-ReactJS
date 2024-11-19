import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {

  return (
    <nav className="navbar">
      <ul className="categories">
        <li className="category">
          <Link to="/category/pasteles" aria-label="Ver productos de pasteles">Pasteles</Link>
        </li>
        <li className="category">
          <Link to="/category/galletas" aria-label="Ver productos de galletas">Galletas</Link>
        </li>
        <li className="category">
          <Link to="/category/cupcakes" aria-label="Ver productos de cupcakes">Cupcakes</Link>
        </li>
      </ul>

      <Link to="/" className="brand primary-font-color" aria-label="Ir a la página principal">
        <BsBox className="icon-brand" />
        <p className="title-brand">Pastelería Dulces Momentos</p>
      </Link>

      <CartWidget />
    </nav>
  )
}

export default NavBar