import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

export default function Footer(){

  return(
    <footer className={styles.main}>

    <h4>Lancaster City Nutrition</h4>

    <div className={styles.nav}>
        <Link href="#menu">
          <a><div>shakes</div></a>
        </Link>
        <Link href="#teas">
          <a><div>teas</div></a>
        </Link>
        <Link href="#treats">
          <a><div>treats</div></a>
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


    <aside>
      <a target="blank" href="https://www.kdmundale.com">
        <p>site by KDMundale, 2021</p>
      </a>
    </aside>


    </footer>
  )
}
