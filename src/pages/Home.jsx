import styles from "../styles/Home.module.css";

export default function Home() {
  return (
  <>
  <h1>Welcome to the Shopping Website</h1>
  <div className={styles.container}>
    <div className={styles.bigItem}>Big Div</div>
    <div className={styles.smallContainer}>
      <div className={styles.item}>Small Div 1</div>
      <div className={styles.item}>Small Div 2</div>
    </div>
  </div>

  <div className={styles.containerSide}>
    <div className={styles.sideItem}>item 1</div>
    <div className={styles.sideItem}>item 1</div>
    <div className={styles.sideItem}>item 1</div>
    <div className={styles.sideItem}>item 1</div>
    <div className={styles.sideItem}>item 1</div>
  </div>
  {/* <div className={styles.container}>
    <div className={`${styles.item} ${styles.main}`}>box 1</div>
    <div className={styles.small-conatiner}>
    <div className={`${styles.item} ${styles.item-2}`}>box 2</div>
    <div className={styles.item}>box 3</div>
    </div>
  </div>
  <div className={styles.side}>
    <div className={styles.box}>side product</div>
    <div className={styles.box}>side product</div>
    <div className={styles.box}>side product</div>
  </div> */}
  </>
);
}

