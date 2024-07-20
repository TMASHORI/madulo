import Image from "next/image"
import styles from "./footer.module.css"
import Link from "next/link"
import { links, locations } from "@/lib/data"

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.singlebox}>
                    <div className={styles.logoAndDetails}>
                        <div className={styles.logo}>
                            <Image src="/deal.png" alt="" width={30} height={30} unoptimized />
                            <Link href="/" className={styles.home}>
                                Maroko.
                            </Link>
                        </div>
                        <p className={styles.text}>We can help you find a place to rent or a job locally. </p>
                        <Image src="/socials.png" className={styles.socials} alt="" width={35} height={40} unoptimized />
                    </div>
                </div>
                <div className={styles.singlebox}>
                    <h3 className={styles.title}>Navigation</h3>
                    <div className={styles.links}>
                        {links.map((link, i) => {
                            return (
                                <>
                                    <Link className={styles.link} key={i} href={link.path} alt={link.name}>{link.name}</Link>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.singlebox}>
                    <h3 className={styles.title}>Featured locations</h3>
                    <div className={styles.links}>
                        {locations.map((place, i) => {
                            return (
                                <>
                                    <p className={styles.link} key={i} alt={place.name}>{place.name}</p>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
