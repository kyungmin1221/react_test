import { FiGithub, FiMail } from 'react-icons/fi';
import './Footer.css';

function Footer() {
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
          <a href="mailto:kyungmin@example.com" aria-label="Email">
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
