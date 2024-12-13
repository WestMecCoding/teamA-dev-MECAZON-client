import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import Catagories from "./Catagories.jsx";
import LogoLG from "./LogoLG.jsx";
// import Signup from "./Signup.jsx";
// import Cart from "./Cart.jsx";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <LogoLG />
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/products" className={styles.link}>
        Products
      </Link>
      <SearchBar />
      <Link to="/" className={styles.link}>
        {/* <Signup /> */}Sign-up
      </Link>
      <Link to="/" className={styles.link}>
        {/* <Cart /> */}Cart
      </Link>
    </nav>
  );
}
