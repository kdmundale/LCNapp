import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/PhotoBanner'
import Link from 'next/link'
const db = require('../db')

export async function getStaticProps () {

  const query1 = {
    text: 'SELECT * FROM shakes WHERE shake_group = $1 AND available=$2',
    values:[1,true],
  }
  const query2 = {
    text: 'SELECT * FROM shakes WHERE shake_group = $1 AND available=$2',
    values:[2,true],
  }
  const query3 = {
    text: 'SELECT * FROM shakes WHERE shake_group = $1 AND available=$2',
    values:[3,true],
  }
  const query4 = {
    text: 'SELECT * FROM shakes WHERE shake_group = $1 AND available=$2',
    values:[4,true],
  }
  const query5 = {
    text: 'SELECT * FROM shakes WHERE shake_group = $1 AND available=$2',
    values:[5,true],
  }
  const query6 = {
    text: 'SELECT * FROM shakes WHERE shake_group = $1 AND available=$2',
    values:[6,true],
  }
  const query7 = {
    text: 'SELECT * FROM shakes WHERE shake_group = $1 AND available=$2',
    values:[7,true],
  }
  const query8 = {
    text: 'SELECT * FROM shakes WHERE shake_group = $1 AND available=$2',
    values:[8,true],
  }
  const query9 = {
    text: 'SELECT * FROM shakes WHERE shake_group = $1 AND available=$2',
    values:[9,true],
  }
  const query10 = {
    text: 'SELECT * FROM shakes WHERE shake_group = $1 AND available=$2',
    values:[10,true],
  }
  try {
    const res1 = await db.query(query1)
    const res2 = await db.query(query2)
    const res3 = await db.query(query3)
    const res4 = await db.query(query4)
    const res5 = await db.query(query5)
    const res6 = await db.query(query6)
    const res7 = await db.query(query7)
    const res8 = await db.query(query8)
    const res9 = await db.query(query9)
    const res10 = await db.query(query10)
    const shakeData2 = res2.rows
    const shakeData1 = res1.rows
    const shakeData3 = res3.rows
    const shakeData4 = res4.rows
    const shakeData5 = res5.rows
    const shakeData6 = res6.rows
    const shakeData7 = res7.rows
    const shakeData8 = res8.rows
    const shakeData9 = res9.rows
    const shakeData10 = res10.rows
    return {
      props: {shakeData1,shakeData2,shakeData3,shakeData4,shakeData5,shakeData6,shakeData7,shakeData8,shakeData9,shakeData10}
    }
  } catch (err) {
    console.log(err.stack)
  }
}

export default function Home({shakeData1,shakeData2,shakeData3,shakeData4,shakeData5,shakeData6,shakeData7,shakeData8,shakeData9,shakeData10}) {

  const shakes1 = shakeData1.map((c) =>
      <p>{c.name}</p>
  )
  const shakes2 = shakeData2.map((c) =>
      <p>{c.name}</p>
  )
  const shakes3 = shakeData3.map((c) =>
      <p>{c.name}</p>
  )
  const shakes4 = shakeData4.map((c) =>
      <p>{c.name}</p>
  )
  const shakes5 = shakeData5.map((c) =>
      <p>{c.name}</p>
  )
  const shakes6 = shakeData6.map((c) =>
      <p>{c.name}</p>
  )
  const shakes7 = shakeData7.map((c) =>
      <p>{c.name}</p>
  )
  const shakes8 = shakeData8.map((c) =>
      <p>{c.name}</p>
  )
  const shakes9 = shakeData9.map((c) =>
      <p>{c.name}</p>
  )
  const shakes10 = shakeData10.map((c) =>
      <p>{c.name}</p>
  )

  return (
    <div className={styles.container}>
      <Header>LCN Home</Header>
      <Banner/>
      <article className={styles.main}>
      <h3>Welcome to the home of healthy shakes and teas in downtown Lancaster, Pa!</h3>
      <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
        metus eget iaculis fermentum. Pellentesque lobortis urna id leo dictum,
        quis fringilla arcu posuere. In turpis tellus, auctor vel semper quis,
        tincidunt ornare magna. Aenean venenatis iaculis tortor sed suscipit. Morbi
        congue suscipit imperdiet. Sed id risus scelerisque, vulputate eros sit
        amet, suscipit libero. Donec aliquet viverra nulla, sed rhoncus lectus
        congue non.</p>
      </section>

      <div className={styles.nav}>
          <Link href="/">
            <a id={styles.pic1}><div>shakes</div></a>
          </Link>
          <Link href="/">
            <a id={styles.pic2}><div>teas</div></a>
          </Link>
          <Link href="/">
            <a id={styles.pic3}><div>snacks</div></a>
          </Link>
          <Link href="/">
            <a id={styles.pic4}><div>about us</div></a>
          </Link>
      </div>

      <section id={styles.herbalife}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
        metus eget iaculis fermentum. Pellentesque lobortis urna id leo dictum,
        quis fringilla arcu posuere. In turpis tellus, auctor vel semper quis,
        tincidunt ornare magna. Aenean venenatis iaculis tortor sed suscipit. Morbi
        congue suscipit imperdiet. Sed id risus scelerisque, vulputate eros sit
        amet, suscipit libero. Donec aliquet viverra nulla, sed rhoncus lectus
        congue non.</p>

        <Link href="/">
          <a id={styles.pic5}><div>herbalife</div></a>
        </Link>
      </section>
      </article>
      <article id={styles.shakeMenu}>
      <h1>Menu</h1>
        <section>
          <h2>Group 1</h2>
          <div>
            {shakes1}
          </div>
        </section>
        <section>
          <h2>Group 2</h2>
          <div>
            {shakes2}
          </div>
        </section>
        <section>
          <h2>Group 3</h2>
          <div>
            {shakes3}
          </div>
        </section>
        <section>
          <h2>Group 4</h2>
          <div>
            {shakes4}
          </div>
        </section>
        <section>
          <h2>Group 5</h2>
          <div>
            {shakes5}
          </div>
        </section>
        <section>
          <h2>Group 6</h2>
          <div>
            {shakes6}
          </div>
        </section>
        <section>
          <h2>Group 7</h2>
          <div>
            {shakes7}
          </div>
        </section>
        <section>
          <h2>Group 8</h2>
          <div>
            {shakes8}
          </div>
        </section>
        <section>
          <h2>Group 9</h2>
          <div>
            {shakes9}
          </div>
        </section>
        <section>
          <h2>Group 10</h2>
          <div>
            {shakes10}
          </div>
        </section>
      </article>
      <Footer/>
    </div>
  )
}
