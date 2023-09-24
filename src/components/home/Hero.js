import Image from 'next/image'
import classes from './Hero.module.css'

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          alt='an image showing myself'
          src='/images/site/hasan.png'
          width={300}
          height={300}
        />
      </div>
      <h1>hi im hasan</h1>
      <p>i blog about web dev especially frontend frameworks</p>
    </section>
  )
}
