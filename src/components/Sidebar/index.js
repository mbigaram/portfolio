import "./index.scss"
import LogoM from '../../assets/images/logomb.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
  } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
<div className="nav-bar">
    <Link className="logo" to="/">
    <img src={LogoM} alt="logo" />
    <img className="sub-logo" src={LogoSubtitle} alt="marcelo" />
    </Link>
    <nav>
    <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          exact="true"
          activeclassname="active" className="about-link"
          to="/about"
          >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          exact="true"
          activeclassname="active" className="contact-link"
          to="/contact"
          >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/marcelo-bigaram/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mbigaram"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
</div>
)

export default Sidebar