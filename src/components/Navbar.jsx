import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import LogoLG from "./LogoLG.jsx";
// import Signup from "./Signup.jsx";
// import Cart from "./Cart.jsx";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <LogoLG />
      <Link to="/">Home</Link>
      <Link to="/">Products</Link>
      <SearchBar />
      <Link to="/">{/* <Signup /> */}Sign-up</Link>
      <Link to="/">{/* <Cart /> */}Cart</Link>
    </nav>
  );
}
