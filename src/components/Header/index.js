import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <ul className="nav-menu">
      <div className="logo-img-and-heading-div">
        <img
          className="logo-img"
          alt="wave"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
        <h1 className="logo-heading">Wave</h1>
      </div>
      <div className="nav-menu-items-div">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </div>
    </ul>
  </>
)
export default Header
