import styles from "../styles/GroceryList.module.css";
import { Link } from "react-router-dom";

export default function GroceryList({ items }) {
  return (
    <div className={styles.list}>
      {items.map((i) => (
        <div key={i.id} className={styles.item}>
<<<<<<< HEAD
          <img src="" alt="" className={styles.img} />
          <h2>
            <Link to="/product">{i.name}</Link>
          </h2>
          <p>Category: {i.category}</p>
          <p>Price: {i.price}</p>
=======
          <Link to="/product" className={styles.link}>
            <img src={i.imgSrc} alt="" className={styles.img} />
            <h2>{i.item}</h2>
            <p>Category: {i.category}</p>
            <p>Price: {i.price_in_usd}</p>
          </Link>
>>>>>>> b7bef44e090040d390615c6a4b2b6b22db65b80b
        </div>
      ))}
    </div>
  );
}
