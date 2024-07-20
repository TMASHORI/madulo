import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.titles}>
      <h1 className={styles.title}>New <span className={styles.highlight}> Job</span>? <br/> No place to <span className={styles.highlight}>Rent</span> ? <br/>We are here to help !  </h1>
      <h2 className={styles.subtitle}>With our agents help,you will find a comfortable place within your budget.</h2>

      </div>

    </main>
  );
}
