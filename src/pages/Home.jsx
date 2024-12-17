import styles from "../styles/Home.module.css";
import Image from "./download.png";

export default function Home() {
  return (
    <>
  <h1>Welcome to the Shopping Website</h1>
  <div className={styles.layoutContainer}>
    <div className={styles.gridContainer}>
      <div className={styles.bigDiv}>
        <img src={<Image />} alt="" width="20px" />
        <h1 className={styles.divTitle}>Office Supply</h1>
        {/* <div id={styles.exOne}></div> */}
      </div>
      <div className={styles.smallDiv}>
        <h1 className={styles.divTitle}>Travel</h1>
        {/* <div className={styles.exTwo}></div> */}
      </div>
      <div className={styles.smallDiv}>
      <h1 className={styles.divTitle}>Electronics</h1>
        {/* <div className={styles.exTwo}></div> */}
      </div>
    </div>
    {/* <div className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <div className={styles.exThree}></div>
      </div>
      <div className={styles.sidebarItem}>
        <div className={styles.exThree}></div>
      </div>
      <div className={styles.sidebarItem}>
        <div className={styles.exThree}></div>
      </div>
    </div> */}
  </div>
  </>
);
}
