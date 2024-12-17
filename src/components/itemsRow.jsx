import styles from "../styles/itemsRow.module.css";
import { Link } from "react-router-dom";
import image from "./download.png";

export default function itemsRow({ items }) {
  return (
    <div className={styles.list}>
      {/* {items.map((i) => ( */}
      <div key={i.id} className={styles.item}>
        <Link to="/product" className={styles.link}>
          <div className={styles.card}>
            <img src={image} alt="nothing" />
          </div>
        </Link>
      </div>
      {/* ))} */}
    </div>
  );
}
