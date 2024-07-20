"use client"
import Image from "next/image"
import styles from "./Navbar.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { links } from "@/lib/data"

const Navbar = () => {

  const pathname = usePathname()

  return (
    <header>

      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/deal.png" alt="" width={75} height={75} unoptimized />
          <Link href="/" className={styles.home}>
            Maroko.
          </Link>
        </div>
        <div className={styles.links}>

          {links.map((link, i) => {
            return (
              <>
                <Link className={`${styles.link} ${pathname === link.path && styles.focus}`} key={i} href={link.path} alt={link.name}>{link.name}</Link>

              </>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Navbar
