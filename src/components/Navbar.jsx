import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "./logo.jsx";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <Link to="/">Home</Link>
    </nav>
  );
}
