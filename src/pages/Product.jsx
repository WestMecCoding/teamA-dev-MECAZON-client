import styles from "../styles/Product.module.css";

export default function Product({ items }) {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.wrapper}>
        <div
                    style='background: url("https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'
                    className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"
                ></div>
          <div className={styles.smallbox}>small box 1</div>
          <div className={styles.smallbox}>small box 2</div>
          <div className={styles.smallbox}>small box 3</div>
        </div>
      </div>

      {/* <div className={styles.containerbig}>
        <div className={styles.bigbox}>big box picture</div>
      </div> */}
    </>
  )
  return (
    <>
      <div className={styles.body}>
        {/* <h1>Welcome to the Shopping Website</h1> */}
      </div>
      <div className={styles.container}>
        <div className={styles.somethingContainer}></div>
        <div className={styles.ratingContainer}>
          <h2>Title</h2>
          <Star className={styles["starB"]}></Star>
          <div className={styles.container2}>
            <div className={styles.smallbox}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                exercitationem repudiandae nemo temporibus modi quidem sapiente
                tenetur odio, possimus est veniam unde sit, ducimus vitae cumque
                placeat quisquam, corporis assumenda?
              </p>
            </div>
          </div>
        </div>
        <div className={styles.fakeImage}></div>
        {/* <br />
        <div className={styles.smallbox}>small box 3</div> */}
      </div>
    </>
  );
}
