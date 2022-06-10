import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
    <Head>
    <title>HAPPY TRAVELS !!</title>
     <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.container}>
     <header className={styles.header}>
        <nav className={styles.navbar}>
           <div className={styles.box}>
           <h2 className={`${styles.h1} ${styles.logo} ${styles.textwhite} ${styles.hover1}`}><Link href="/"><span className={styles.buttonlogo}>HAPPY</span></Link></h2>
           <ul className={`${styles.listitems} ${styles.textwhite}`}>
             <li className={`${styles.listitem} ${styles.hover1}`}><Link  href="/">HOME</Link></li>
             <li className={`${styles.listitem} ${styles.hover1}`}><Link  href="/About">ABOUT</Link></li>
             <li className={`${styles.listitem} ${styles.hover1}`}><Link  href="/Contact">CONTACT</Link></li>
           </ul>
           </div>
        </nav>
      <div className={styles.contentbox}>
         <h1 className={`${styles.h1} ${styles.lgheading} ${styles.text_white}`}>Travel  And Explore</h1>
         <p>world is beautiful !! </p>
         <p>Go deep and deep into it !!</p>
         <Link  href="#explore-places"><span className={`${styles.button} ${styles.buttonpri} ${styles.textpurple} ${styles.hover}`}>Explore</span></Link>
      </div>
    </header>
    <section className={styles.places} id="explore-places">
      <div className={styles.box}>
        <div className={`${styles.box} ${styles.box1}`}>
            <div className={`${styles.zoom} ${styles.imgbox}`}><Image height={383} width={650} src="/Internship-Assignment/images/tajmahal.jpg" alt=""/></div>
            <div className={styles.textbox}>
                <h2 className={styles.h2}>TAJ MAHAL , INDIA</h2>
                <p className={styles.textgrey}>The Taj Mahal  (Crown of the Palace), is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.</p>
                <Link href="https://en.wikipedia.org/wiki/Taj_Mahal" target="_blank"><span className={`${styles.buttonsec} ${styles.hover} ${styles.textpurple}`} >MORE</span></Link>
            </div>
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
            <div className={`${styles.zoom} ${styles.imgbox}`}><Image height={383} width={650} src="/Internship-Assignment/images/eiffel tower.jpg" alt=""/></div>
            <div className={styles.textbox}>
                <h2 className={styles.h2}>EIFFEL TOWER , PARIS</h2>
                <p className={styles.textgrey}>The Eiffel Tower, La Tour Eiffel in French, was the main exhibit of the Paris Exposition or Worlds Fair of 1889. It was constructed to commemorate the centennial of the French Revolution and to demonstrate France industrial prowess to the world.The Eiffel company design won, and construction of the wrought-iron tower began in July 1887 </p>
                <Link href="https://en.wikipedia.org/wiki/Eiffel_Tower" target="_blank"><span className={`${styles.buttonsec} ${styles.hover} ${styles.textpurple}`}>MORE</span></Link>
            </div>
        </div>
        </div>
    </section>
    <section className={styles.feature}>
        <div className={`${styles.box} ${styles.box3}`}>
            <div className={`${styles.block1} ${styles.colorgrey}`}>
                <h1 className={`${styles.h1} ${styles.medheading}`}>
                  Unforgettable Moments!!
                </h1>
                <p>
                Happy Travels is the best when it comes to discovering India. I visited this amazing country with a group of friends. The team is professional and attentive to the tiniest details. Our guides were very knowledgeable and flexible. I am definitely coming back to discover more regions with Happy Travels!
                </p>
                <p className={styles.traveller}>- Juliet from America</p>
            </div>
            <div className={`${styles.block2} ${styles.colorpurple}`}>
                <h1 className={`${styles.h1} ${styles.medheading}`}>
                   Best Tour To Italy
                </h1>
                <p>
                One of the most wonderful country !! We had a tour with the professional team of world travel experience , they are very helpful , welcoming and friendly. Our stay was royal. The itinerary was personalized to make every moment unique and enjoyable. Sure I will do it again and again.
                </p>
                <p className={styles.traveller}>- Sahil from India</p>
            </div>
            <div className={`${styles.block3} ${styles.colorgrey}`}>
                <h1 className={`${styles.h1} ${styles.medheading}`}>
                   Wonderful Trip :)
                </h1>
                <p>
                Its a wonderful trip we had. We went to Manali, Kullu from Delhi with whole family (10 Adults and 6 children) at a affordable cost (Worth for money). Everyone enjoyed the trip. The hotel booking was good. Representative picked up with warm welcome. Overall we had a nice trip. I would like to recommend "Happy Travels" to my friends and family.
                </p>
                <p className={styles.traveller}>- Ahmed from Dhaka</p>
            </div>  
        </div>
    </section>
    <footer className={`${styles.footer} ${styles.colorgrey}`}>
      <h1 className={styles.footerheading}>Know more about us at:</h1>
    <Link href=""  target="_blank"><span className={`${styles.footerbtn} ${styles.hover} ${styles.textwhite}`}>Facebook</span></Link>
    <Link href=""  target="_blank"><span className={`${styles.footerbtn} ${styles.hover} ${styles.textwhite}`}>Instagram</span></Link>
    <Link href=""  target="_blank"><span className={`${styles.footerbtn} ${styles.hover} ${styles.textwhite}`}>Twitter</span></Link>
     <p className={styles.textwhite}> HAPPY &#169; 2021 , All Rights Reserved </p>
    </footer> 
     </div> 
    </>
  )
  }
