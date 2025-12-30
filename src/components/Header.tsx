import { FaLinkedin, FaGithub, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        {/* Logo + Name */}
        <div className="ln">
          <img src={logo} alt="logo" className="logo" />
          <span className="name">Shfaa Nakour</span>
        </div>
        {/* Navigation */}
        <nav className="contact">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          {/* Search */}
          <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>
          {/* Social links */}
          <a
            href="https://www.linkedin.com/in/shfaa-nakour-45a000339/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color='#12F7D6'/>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color='#12F7D6'/>
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
