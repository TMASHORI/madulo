import Image from "next/image";
import styles from "./page.module.css";
import { workers } from "@/lib/data";

export default function Home() {




  return (
    <main className={styles.main}>
      
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <div className={styles.titles}>
            <h1 className={styles.title}>New <span className={styles.highlight}> Job</span>? <br /> No place to <span className={styles.highlight}>Rent</span> ? <br />We are here to help !  </h1>

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
      <br />

      <div className={styles.divider}>
        <div className={styles.shortLine} />
        <div className={styles.longLine} />
      </div>
      <br />
      <br />
      <br />
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <h2 className={styles.subtitle}>With our agents help,you will find a comfortable place <br />within your budget.</h2>
          <br />
          <br />
          <br />
          <p className={styles.paragraph}>Welcome to Madulo,the top choice
            for affordable rental properties tailored
            specifically for mine workers .<br />
            <br />We understand the unique needs of those working in the
            mining industry,and our selection of budget friendly,
            comfortable housing options is designed to
            offer you a convinient and restful retreat<br />
            after a hard days work.
            <br />
            <br />
            With focus on practicality andcomfort ,we provide clean,
            well-maintained accomodations close to you job site.
            <br />
            <br />
            Explore our listings today and find a place where you
            can relax and recharge for the days ahead.
          </p>
        </div>
        <div className={styles.bottomRight}>
          
        </div>
      </div>

    </main>
  );
}




