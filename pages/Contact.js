import React from "react"
import styles from "../styles/Contact.module.css"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

function Contact() {
  return (
    <>
    <Head>
    <title>HAPPY - Contact Us</title>
     <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.container}>
    <header className={`${styles.header} ${styles.colorgrey}`}>
    <nav className={styles.navbar}>
           <div className={styles.box}>
           <h2 className={`${styles.h1} ${styles.logo} ${styles.textwhite} ${styles.hover1}`}><Link href="/"><span className={styles.buttonlogo}>HAPPY</span></Link></h2>
           <ul className={`${styles.listitems} ${styles.textwhite}`}>
             <li className={`${styles.listitem} ${styles.hover1}`}><Link href="/">HOME</Link></li>
             <li className={`${styles.listitem} ${styles.hover1}`}><Link href="/About">ABOUT</Link></li>
             <li className={`${styles.listitem} ${styles.hover1}`}><Link  href="/Contact">CONTACT</Link></li>
           </ul>
           </div>
        </nav>
      </header>
    <section className={styles.contact}>
        <div className={ `${styles.box} ${styles.details}`}>
            <div className={styles.block1}>
                <ul className={styles.detlist}>
                    <li className={styles.location}>
                        <span className={styles.textpurple}>LOCATION</span>
                        <p>1-20-1720 , Vijaypuri Colony , Tarnaka ,
                            Secunderabad , Hyderabad.</p>
                    </li>
                    <li className={styles.mail}>
                        <span className={styles.textpurple}>MAIL</span>
                        <p>happy17@gmail.com</p>
                    </li>
                    <li className={styles.call}>
                        <span className={styles.textpurple}>CALL</span>
                        <p>+91-1010101010</p>
                    </li>
                </ul>
                <div className={styles.officeimg}>
                    <Image height={500} width={700} src="/images/company-image2.jpg" alt=""/>
                </div>
            </div>
            <div className={styles.block2}>
                <h1 className={`${styles.textpurple} ${styles.h1}`}>Contact Us</h1>
                <p>Let us know your questions , suggestions and concerns by filling out the contact form below.</p>
                <div className={styles.formbox}>
                <form className={styles.form} action="">
                    <label htmlFor="username">Username</label><br/>
                    <input id="username" type="text" required/><br/>
                    <label htmlFor="email">Email</label><br/>
                    <input id="email" type="email" required/><br/>
                    <label htmlFor="phone">Phone</label><br/>
                    <input id="phone" type="number" required/><br/>
                    <label htmlFor="message">Message</label><br/>
                    <textarea id="message"></textarea>
                </form>
                    <button className={styles.textwhite} type="submit">SUBMIT</button>
                </div>
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

export default Contact