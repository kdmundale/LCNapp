import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../styles/Banner.module.css'
import Image from 'next/image'
export default function Banner(){

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2401 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2400, min: 2001 },
      items: 3.5
    },
    desktop: {
      breakpoint: { max: 2000, min: 1600 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1600, min: 1224 },
      items: 2.5
    },
    tablet: {
      breakpoint: { max: 1224, min: 720 },
      items: 2.5
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 2
    }
  };
  return(
  <Carousel
    arrows={false}
    infinite={true}
    autoPlay={true}
    ssr={true}
    autoPlaySpeed={4000}
    className={styles.main}
    partialVisible={false}
    responsive={responsive}
    transitionDuration={700}>
    <div>
    <Image
        src="/images/4_shakes_e.jpeg"
        layout='intrinsic'
        height={600}
        width={650}
        alt=""
        rel="preload"/>
        </div>
    <div>
    <Image
        src="/images/pink_tea_s.jpg"
        layout='intrinsic'
        height={600}
        width={650}
        alt=""
        rel="preload"/>
        </div>
    <div><Image
        src="/images/snacks_2_e.jpeg"
        layout='intrinsic'
        height={600}
        width={650}
        alt=""
        rel="preload"/></div>
    <div><Image
        src="/images/fruity_shake_s.jpg"
        layout='intrinsic'
        height={600}
        width={650}
        alt=""
        rel="preload"/></div>
    <div>
    <Image
        src="/images/life_saver_s.jpg"
        layout='intrinsic'
        height={600}
        width={650}
        alt=""
        rel="preload"/>
        </div>
    <div><Image
        src="/images/blue_tea_s.jpg"
        layout='intrinsic'
        height={600}
        width={650}
        alt=""
        rel="preload"/></div>
    <div><Image
        src="/images/mural_e.jpeg"
        layout='intrinsic'
        height={600}
        width={650}
        alt=""
        rel="preload"/></div>
    <div>
    <Image
        src="/images/shakes_teas_e.jpeg"
        layout='intrinsic'
        height={600}
        width={650}
        alt=""
        rel="preload"/>
        </div>
    <div><Image
        src="/images/oat_nut_s.jpg"
        layout='intrinsic'
        height={600}
        width={650}
        alt=""
        rel="preload"/></div>
    <div><Image
        src="/images/snacks_e.jpeg"
        layout='intrinsic'
        height={600}
        width={650}
        alt=""
        rel="preload"/></div>
    <div>
    <Image
        src="/images/six_shakes_s.jpg"
        layout='intrinsic'
        height={600}
        width={650}
        alt=""
        rel="preload"/>
        </div>
    <div><Image
            src="/images/mint_s.jpeg"
            layout='intrinsic'
            height={600}
            width={650}
            alt=""
            rel="preload"/>
            </div>
    <div><Image
            src="/images/shakes_teas_s.jpeg"
            layout='intrinsic'
            height={600}
            width={650}
            alt=""
            rel="preload"/>
            </div>
  </Carousel>
  );
}
