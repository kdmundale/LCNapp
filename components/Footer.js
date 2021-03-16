import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer(){

  return(
    <footer className={styles.main}>

    <h4>Lancaster City Nutrition</h4>

    <div className={styles.nav}>
        <Link href="/">
          <a><div>shakes</div></a>
        </Link>
        <Link href="/">
          <a><div>teas</div></a>
        </Link>
        <Link href="/">
          <a><div>snacks</div></a>
        </Link>
        <Link href="/">
          <a><div>about</div></a>
        </Link>
        <Link href="/">
          <a><div>contact</div></a>
        </Link>
    </div>

        <address>
          <p>307 North Queen Street - Lancaster, PA 17603</p>
          <p><a href="tel:1-717-945-6741">717.945.6741</a></p>
        </address>

    </footer>
  )
}
