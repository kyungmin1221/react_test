import { Link } from 'react-router-dom';
import { FiGithub, FiMail, FiSettings } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import './Footer.css';

function Footer() {
  const { isAdmin } = useAuth();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Kyungmin Park. All rights reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/kyungmin1221"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a href="mailto:fox9872@naver.com" aria-label="Email">
            <FiMail size={20} />
          </a>
          <Link
            to={isAdmin ? '/admin' : '/admin/login'}
            className="admin-link"
            aria-label="관리자"
            title="관리자"
          >
            <FiSettings size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
