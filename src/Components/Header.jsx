import { Link, NavLink } from "react-router-dom"; // Import Link for internal navigation
import { useEffect, useRef } from "react";

export default function Header({ menu, toggleMenu, setMenu }) {
  const menuRef = useRef(null); // Create a reference to the menu (navbar) element

  // Function to close the menu when clicking outside of it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenu(false); // Set menu to false if the click is outside the menu
    }
  };

  // Add event listener to detect clicks outside the navbar when the menu is open
  useEffect(() => {
    if (menu) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Cleanup listener on component unmount or when menu is closed
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menu]);

  return (
    <header className=" kasse">
      <nav ref={menuRef}>
        <Link to="/">
          <img src="./Union.svg" alt="Simon Petersens logo" />
        </Link>
        <ul
          style={{
            left: menu ? "50%" : "150%",
          }}
        >
          <li>
            <NavLink to="/projects">
              <img src="./Projects.svg" alt="Projekt-ikon" />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <img src="./About.svg" alt="Om-ikon" />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">
              <img src="./services.svg" alt="Kontakt-ikon" />
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <img src="./Contact.svg" alt="Kontakt-ikon" />
              Contact
            </NavLink>
          </li>
        </ul>
        <img
          src={menu ? "./Eye-open.svg" : "./Eye.svg"}
          alt="Menu-knap"
          className="menu-knap"
          onClick={toggleMenu}
        />
      </nav>
    </header>
  );
}
