import { NavLink } from 'react-router-dom';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        &copy; 2026 LearnHub
      </div>
      <ul className="footer-links">
        <li>
          <NavLink to="/" className="footer-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" className="footer-link">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="footer-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="footer-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
