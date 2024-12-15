import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import Catagories from "./Catagories.jsx";
import LogoLG from "./LogoLG.jsx";
// import Signup from "./Signup.jsx";
import Cart from "./Cart.jsx";

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          <LogoLG />
        </Link>
        <Link to="/" className={styles.link}>
          Products
        </Link>
        <SearchBar />
        <Link to="/" className={styles.link}>
          <Cart />
        </Link>
        <Link to="/account" className={styles.link}>
          {/* <Signup /> */}Sign-up
        </Link>
      </nav>

      <Catagories />
    </>
  );
}
