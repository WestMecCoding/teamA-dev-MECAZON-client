import styles from "../styles/Product.module.css";

export default function Product() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          {items.map((i) => {
            const image = new URL(i.imgSrc, import.meta.url).href;
            return (
              <>
        <div className={styles.wrapper}>
          <div className={styles.smallbox}>small box 1</div>
          <div className={styles.smallbox}>small box 2</div>
          <div className={styles.smallbox}>small box 3</div>
        </div>
              </>
            );
          })}

        </div>
      </div>

      {/* <div className={styles.containerbig}>
        <div className={styles.bigbox}>big box picture</div>
      </div> */}
    </>
  );
}
