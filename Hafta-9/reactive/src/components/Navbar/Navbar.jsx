import { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sayfa kaydırıldığında navbar stilini değiştirme
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hamburger menüyü açıp kapama
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav id="navbar-container" className={isScrolled ? "scrolled" : ""}>
        {/* Logo */}
        <a href="#home">
          <img src="images/logo.png" alt="Logo" />
        </a>

        {/* Hamburger Menu */}
        <div className={`nav-hamburger ${isMenuOpen ? "expanded" : ""}`}>
          <button className="btn-toggle-nav-hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Menü Linkleri */}
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#review">Review</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#join-us">Join Us</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
