import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <div className={styles.titles}>
            <h1 className={styles.title}>New <span className={styles.highlight}> Job</span>? <br /> No place to <span className={styles.highlight}>Rent</span> ? <br />We are here to help !  </h1>
            <h2 className={styles.subtitle}>With our agents help,you will find a comfortable place <br />within your budget.</h2>
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.imageContainer}>
            <Image src="/map.png" alt="" width={200} height={200} unoptimized />
          </div>
          <div className={styles.locations}>
            <h3 className={styles.subtitle}>Locations we operate</h3>
            <p className={styles.location}>Kuruman</p>
            <p className={styles.location}>Postmasburg</p>
            <p className={styles.location}>Kathu</p>
          </div>
        </div>
      </div>
      <div className={styles.divider}>
        <div className={styles.longLine} />
        <div className={styles.shortLine} />
      </div>

    </main>
  );
}
