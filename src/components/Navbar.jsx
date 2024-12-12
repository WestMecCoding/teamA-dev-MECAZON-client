import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import LogoLG from "./LogoLG.jsx";
import LogoSM from "./LogoSM.jsx";
import LogoMD from "./LogoMD.jsx";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <LogoLG />
      <LogoMD />
      <LogoSM />
      <Link to="/">Home</Link>
    </nav>
  );
}
