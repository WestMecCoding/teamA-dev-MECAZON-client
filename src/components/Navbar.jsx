import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import Catagories from "./Catagories.jsx";
import LogoLG from "./LogoLG.jsx";
// import Signup from "./Signup.jsx";
// import Cart from "./Cart.jsx";

export default function Navbar() {
  return (
<<<<<<< HEAD
    <nav className={styles.nav}>
      <LogoLG />
      <Link to="/">Home</Link>
      <Link to="/">Products</Link>
      <SearchBar />
      <Link to="/">{/* <Signup /> */}Sign-up</Link>
      <Link to="/">{/* <Cart /> */}Cart</Link>
    </nav>
=======
    <div>
      <nav className={styles.nav}>
        <LogoLG />
        <Link to="/">Home</Link>
        <Link to="/">Products</Link>
        <SearchBar />
        <Link to="/">Sign-Up/Log-in</Link>
        <Link to="/">Cart</Link>
      </nav>
      <Catagories />
    </div>
>>>>>>> c26f38a4652ed9017ffd51a542818ff0ac461c80
  );
}
