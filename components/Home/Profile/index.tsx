import React from "react";
import Image from "next/image";
import { Socials } from "../../widgets/Socials";
import styles from './index.module.scss';

export const Profile: React.FC = () => {
    
    return (
        <article className={styles.profile}>
            <header className={styles.header}>
                <h1>Profile</h1>
                <p>I am a web developer</p>
            </header>
            <figure className={styles.figure}>
                <Image 
                    className={styles.photo}
                    src="/images/author/Sergey_Medvedkin_230x230.jpg" 
                    width={155}
                    height={155}
                    alt="Sergey Medvedkin" 
                />
            </figure>
            <section className={styles.about}>
                <h3>About me</h3>
                <p>
                I am a web developer. I specialize in front-end development and mainly use the React / Redux stack, 
                as well as the Next framework to improve SEO. I also work with the back end using Express, SQL databases 
                so I can create a fully functional web application or website, corporate portal, forum, etc. 
                I have worked with various clients and have a team capable of bringing your big ideas to life.
                </p>
            </section>
            <section className={styles.details}>
                <h3>Details</h3>
                <div className={styles.info}>
                    <p>Name:</p>
                    <p>Sergey Medvedkin</p>
                </div>
                <div  className={styles.info}>
                    <p>Experience:</p>
                    <p>2 years</p>
                </div>
                <div className={styles.info}>
                    <p>Loacation:</p>
                    <p>Krasnodar, Russia</p>
                </div>
                <div className={styles.socials}>
                    <Socials width="14" height="14" fill="black" />
                </div>
            </section>
        </article>
    )
}