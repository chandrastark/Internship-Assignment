import React from "react"
import styles from "../styles/About.module.css"
import Head from "next/head"
import Link from "next/link"
function About() {
  return (
    <>
    <Head>
    <title>HAPPY - About</title>
     <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.container}>
    <header className={`${styles.header} ${styles.colorgrey}`}>
    <nav className={styles.navbar}>
           <div className={styles.box}>
           <h2 className={`${styles.h1} ${styles.logo} ${styles.textwhite} ${styles.hover1}`}><Link href="/"><span className={styles.buttonlogo}>HAPPY</span></Link></h2>
           <ul className={`${styles.listitems} ${styles.textwhite}`}>
             <li className={`${styles.listitem} ${styles.hover1}`}><Link href="/">HOME</Link></li>
             <li className={`${styles.listitem} ${styles.hover1}`}><Link  href="/About">ABOUT</Link></li>
             <li className={`${styles.listitem} ${styles.hover1}`}><Link  href="/Contact">CONTACT</Link></li>
           </ul>
           </div>
        </nav>
    </header>
    <section className={`${styles.aboutsec} ${styles.box}`}>
        <h1 className={`${styles.h1} ${styles.textgrey}`}>About Us</h1>
        <p className={styles.textgrey}> Happy Travels provides various services to make your travel experience lively and memorable.</p>
        <div className={styles.lists}>
         <ul className={`${styles.list1} ${styles.textgrey}`}>
            <li>Assured Best Fares.</li>
            <li>Well Planned Itinerary.</li>
            <li>Easy Airline Ticket Reservation.</li>
         </ul>
         <ul className={`${styles.list2} ${styles.textgrey}`}>
            <li>Experienced Guides.</li>
            <li>Royal Hotel Stays.</li>
            <li>Travel Insurance.</li>
         </ul>
        </div>
         <div className={styles.data}> 
            <div className={styles.data1}>
                <p className={styles.textpurple}>
                   2500+
                </p>
                <h2 className={styles.textgrey}>
                   Travellers
                </h2>
            </div>
            <div className={styles.data2}>
                <p className={styles.textpurple}>
                   5000+
                </p>
                <h2 className={styles.textgrey}>
                   Destinations
                </h2>
            </div>
            <div className={styles.data3}>
                <p className={styles.textpurple}>
                   400
                </p>
                <h2 className={styles.textgrey}>
                   Guide
                </h2>
            </div>
            <div className={styles.data4}>
                <p className={styles.textpurple}> 
                   20
                </p>
                <h2 className={styles.textgrey}>
                   Branches
                </h2>
            </div>
         </div>

          <div className={`${styles.banner} ${styles.colorpurple} ${styles.textwhite}`}>
          <div className={styles.textbanner}>
              <p>What are you waiting for , reach us right now !!</p>
          </div>
         <div className={styles.bannerbtn}>
              <Link href="/Contact"><span className={styles.textwhite}>CONTACT US</span></Link>
         </div>
        </div>
  </section>
  </div>
    </>
  )
}

export default About