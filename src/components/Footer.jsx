import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <h3>Venugopala Rao</h3>

      <p>
        Computer Science Student | Full Stack Developer |
        AI Enthusiast
      </p>

      <div className="footer-links">

        <Link to="/home">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/projects">Projects</Link>

        <Link to="/contact">Contact</Link>

      </div>

      <div className="social-links">

        <a
          href="https://github.com/venu0749"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

      </div>

      <p className="copyright">
        © 2026 Venugopala Rao. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;