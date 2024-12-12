import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import LogoLG from "./LogoLG.jsx";
import LogoSM from "./LogoSM.jsx";
import LogoMD from "./LogoMD.jsx";
import SignupSvg from "./SignupSvg.jsx";
// import Cart from "./CartSvg.jsx";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <LogoLG />
      <Link to="/">Home</Link>
      <Link to="/">Products</Link>
      <SearchBar />
      <Link to="/">
        <Signup />
      </Link>
      <Link to="/">{/* <Cart /> */}</Link>
    </nav>
  );
}
