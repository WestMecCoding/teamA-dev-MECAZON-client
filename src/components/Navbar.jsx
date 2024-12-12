import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import LogoLG from "./LogoLG.jsx";
import LogoSM from "./LogoSM.jsx";
import LogoMD from "./LogoMD.jsx";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <LogoLG />
      <Link to="/">Home</Link>
      <Link to="/">Products</Link>
      <SearchBar />
      <Link to="/">Sign-Up/Log-in</Link>
      <Link to="/">Cart</Link>
    </nav>
  );
}
