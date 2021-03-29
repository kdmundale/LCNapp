import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/PhotoBanner'
import Link from 'next/link'
const db = require('../db')

export async function getStaticProps () {
  const messQuery1 = {
    text:'SELECT * FROM messages WHERE cont_id = $1',
    values:[1],
  }
  const messQuery2 = {
    text:'SELECT * FROM messages WHERE cont_id = $1',
    values:[2],
  }
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

  const query11 = {
    text: 'SELECT * FROM shakes WHERE shake_group = $1 AND available=$2',
    values:[11,true],
  }

  const query_pricing = {
    text: 'SELECT * FROM pricing',
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
    const res11 = await db.query(query11)
    const messRes1= await db.query(messQuery1)
    const messRes2= await db.query(messQuery2)
    const resPricing = await db.query(query_pricing)
    console.log(messRes1.rowCount)
    const shakeData2 = res2.rows
    const shakeData1 = res1.rows
    const shakeData3 = res3.rows
    const shakeData4 = res4.rows
    const shakeData5 = res5.rows
    const shakeData6 = res6.rows
    const shakeData7 = res7.rows
    const shakeData8 = res8.rows
    console.log(res8.rowCount, "!!!!!!!!!!!!!!!!!!!!!")
    const shakeData9 = res9.rows
    const shakeData10 = res10.rows
    const shakeData11 = res11.rows
    const msg1 = messRes1.rows
    const msg2 = messRes2.rows
    const pricing = resPricing.rows
    return {
      props: {shakeData1,shakeData2,shakeData3,shakeData4,shakeData5,shakeData6,shakeData7,shakeData8,shakeData9,shakeData10,shakeData11,msg1,msg2, pricing}
    }
  } catch (err) {
    console.log(err.stack)
  }
}

export default function Home({shakeData1,shakeData2,shakeData3,shakeData4,shakeData5,shakeData6,shakeData7,shakeData8,shakeData9,shakeData10,shakeData11, msg1, msg2, pricing}) {

  const message1 = msg1.map((c) =>
      <div key={c.id}>
      <h4>{c.title}</h4>
      <p>{c.body}</p>
      </div>
  )
  const message2 = msg2.map((c) =>
      <div key={c.id}>
      <h4>{c.title}</h4>
      <p>{c.body}</p>
      </div>
  )
  const shakes1 = shakeData1.map((c) =>
      <p key={c.id}>{c.name}</p>
  )
  const shakes2 = shakeData2.map((c) =>
      <p key={c.id}>{c.name}</p>
  )
  const shakes3 = shakeData3.map((c) =>
      <p key={c.id}>{c.name}</p>
  )
  const shakes4 = shakeData4.map((c) =>
      <p key={c.id}>{c.name}</p>
  )
  const shakes5 = shakeData5.map((c) =>
      <p key={c.id}>{c.name}</p>
  )
  const shakes6 = shakeData6.map((c) =>
      <p key={c.id}>{c.name}</p>
  )
  const shakes7 = shakeData7.map((c) =>
      <p key={c.id}>{c.name}</p>
  )
  const shakes8 = shakeData8.map((c) =>
      <p key={c.id}>{c.name}</p>
  )
  const shakes9 = shakeData9.map((c) =>
      <p key={c.id}>{c.name}</p>
  )
  const shakes10 = shakeData10.map((c) =>
      <p key={c.id}>{c.name}</p>
  )
  const shakes11 = shakeData11.map((c) =>
      <p key={c.id}>{c.name}</p>
  )
  const items_pricing = pricing.map((c) =>
      <table className={styles.combo_holder} key={c.id}>
      <tr>
      <td className={styles.combo}>{c.name}. . . . .{c.price}</td>
      </tr>
      <tr>
      <td className={styles.combo_desc}>{c.description}</td>
      </tr>
      </table>
  )

  return (
    <div className={styles.container}>
      <Header>Welcome to the home of healthy shakes and teas in downtown Lancaster, Pa!</Header>
      <span className={styles.anchor} id="home"/>
      <Banner/>
      <div className={styles.announcements}>
        {message1}
        {message2}
      </div>
      <section id={styles.socialMediaLinks}>
        <h3>follow us on our socials</h3>
        <div>
          <Link href="https://www.facebook.com/Lancaster24fit"><a id={styles.facebook}></a></Link>
          <Link href="https://www.instagram.com/lancastercitynutrition/"><a id={styles.instagram}></a></Link>
          <Link href="/"><a id={styles.snapchat}></a></Link>
        </div>
      </section>
      <article className={styles.main}>

        <address>
          <p><a target="blank" href="https://goo.gl/maps/HJmz6YyMfApLFjr16">307 North Queen Street - Lancaster, PA 17603</a></p>
          <p><a href="tel:1-717-945-6741">717.945.6741</a></p>
        </address>

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
            <Link href="#menu">
              <a id={styles.pic1}><div>drink menu</div></a>
            </Link>
            <Link href="/">
              <a id={styles.pic2}><div>specials</div></a>
            </Link>
            <Link href="#treats">
              <a id={styles.pic3}><div>treats</div></a>
            </Link>
            <Link href="#about">
              <a id={styles.pic4}><div>about us</div></a>
            </Link>

            <span className={styles.anchor} id="herbal"/>
        </div>

        <section id={styles.herbalife}>
          <p>Serving up fast delicious Shakes and Smoothies, Energy Teas, and many other awesome products. Something for everyone!! Daily shake specials and free personal wellness evaluations available.</p>
          <p>Contact Alisha for a wellness consultation today!</p>
          <Link href="http://www.goherbalife.com/ahaas/en-Us">
            <a id={styles.pic5}><div>herbalife</div></a>
          </Link>
        </section>
      </article>
      <article id={styles.shakeMenu}>
        <section>
          <span className={styles.anchor} id="menu"/>
          <div>
          <aside id={styles.shakeInfo}>
            <ul>
              <lh>shakes:</lh>
              <li>17-24 grams of protein</li>
              <li>145-250 calories</li>
              <li>low sugar</li>
              <li>21 essential vitamins and nutrients</li>
            </ul>
            <ul>
              <lh>teas:</lh>
              <li>boost metabolism</li>
              <li>burn 80-100 calories</li>
              <li>under 25 calories</li>
              <li>0 grams of sugar</li>
              <li>SAFE ENERGY, no crash!</li>
            </ul>
            <ul>
              <lh>iced coffees:</lh>
              <li>100 calories</li>
              <li>15 grams of protein</li>
              <li>only 2 grams of sugar</li>
            </ul>
          </aside>
            <h1>Drink Menu</h1>

          </div>
          <div id={styles.menuLinkHolder}>
          <Link href="#combos"><a>Combos & Pricing</a></Link>
          <Link href="#group"><a>Popular Picks</a></Link>
          <Link href="#group1"><a>Smoothie & Tropical</a></Link>
          <Link href="#group2"><a>Coffee Flavors</a></Link>
          <Link href="#group3"><a>Cakes & Pies Flavors</a></Link>
          <Link href="#group4"><a>Candy & Sweets</a></Link>
          <Link href="#group5"><a>Specialty Flavors</a></Link>
          <Link href="#group6"><a>Lifted Mega Teas</a></Link>
          <Link href="#group7"><a>Iced Coffees</a></Link>
          <Link href="#group8"><a>Vegan Shake Options</a></Link>
          <Link href="#group9"><a>Seasonal Shakes</a></Link>
          <Link href="#group10"><a>Seasonal Teas</a></Link>
          <Link href="#treats"><a>Treats</a></Link>
        </div>
        </section>
        <section>
          <span className={styles.anchor} id="combos"/>
          <h2>Combos & Pricing</h2>
          <div>
            {items_pricing}
          </div>
        </section>
        <section>
          <span className={styles.anchor} id="group"/>
          <h2>Popular Picks</h2>
          <div>
            {shakes11}
          </div>
        </section>
        <section>
          <span className={styles.anchor} id="group1"/>
          <h2>Smoothie & Tropical</h2>
          <div>
            {shakes1}
          </div>
        </section>
        <section>
          <span className={styles.anchor} id="group2"/>
          <h2>Coffee Flavors</h2>
          <div>
            {shakes2}
          </div>
        </section>
        <section>
          <span className={styles.anchor} id="group3"/>
          <h2>Cakes & Pies Flavors</h2>
          <div>
            {shakes3}
          </div>
        </section>
        <section>
        <span className={styles.anchor} id="group4"/>
          <h2>Candy & Sweets</h2>
          <div>
            {shakes4}
          </div>
        </section>
        <section>
        <span className={styles.anchor} id="group8"/>
          <h2>Vegan Shake Options</h2>
          <div>
            {shakes8}
          </div>
        </section>
        <section>
        <span className={styles.anchor} id="group9"/>
          <h2>Seasonal Shakes</h2>
          <div>
            {shakes9}
          </div>
        </section>
        <section>
        <span className={styles.anchor} id="group5"/>
          <h2>Specialty Flavors</h2>
          <div>
            {shakes5}
          </div>
        </section>
        <section>
        <span className={styles.anchor} id="group7"/>
          <h2>Iced Coffees</h2>
          <div>
            {shakes7}
          </div>
        </section>
        <section>
        <span className={styles.anchor} id="group6"/>
          <h2>Lifted Mega Teas</h2>
          <div>
            {shakes6}
          </div>
        </section>
        <section>
        <span className={styles.anchor} id="teas"/>
          <h2>Seasonal Teas</h2>
          <div>
            {shakes10}
          </div>
        </section>
        <section>
        <span className={styles.anchor} id="treats"/>
          <h2>Treats</h2>
          <span className={styles.detail}>stop in to see what's available!</span>
          <div>
            <p>protein doughnuts</p>
            <p>protein balls</p>
            <p>protein bars</p>
            <p>waffles</p>
          </div>
        </section>
      </article>
      <span className={styles.anchor} id="about"/>
      <article className={styles.health}>
      <section>
      <h1>About Us</h1>
      <p>Information about us, our beginning, our mission, etc.</p>
      <h1>Health & Wellness</h1>
      <p>more information about health and wellness, challenges, etc</p>
      </section>
      </article>
      <Footer/>
    </div>
  )
}
