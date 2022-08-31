import React from "react";
import styles from './index.module.scss';
import Image from "next/image";
import { AppButton } from "../../widgets/Button";

export const Author: React.FC = () => {
    return (
        <header className={styles.author}>
            <div className={styles.photo}/>
            <div className={styles.info}>
                <h1>Hello, I am Sergey.</h1>
                <h6>Web Developer</h6>
                <p>I am a web developer, make websites and web applications using React, Redux, Next 
                    and I also use Express and MySQL on server side.
                </p>
                <div className={styles.details}> 
                    <Image src="/images/icons/telephone.svg" alt="tel" width={20} height={20} />
                    <span>&nbsp;Phone:&nbsp;</span>
                    <a className={styles.contacts} href="tel:+7-918-253-8109">+7-918-253-8109</a>
                </div>
                <div className={styles.details}>
                    <Image src="/images/icons/email.svg" alt="email" width={19} height={19} />
                    <span>&nbsp;Email:&nbsp;</span>
                    <a className={styles.contacts} href="mailto:meves.sergey@gmail.com">meves.sergey@gmail.com</a>
                </div>
                <div className={styles.details}>
                    <Image src="/images/icons/geo.png" alt="location" width={20} height={20} />
                    <span>&nbsp;Location: Krasnodar, Russia</span>
                </div>
                <div className={styles.details}>
                    <Image src="/images/icons/calendar.png" alt="calendar" width={16} height={16} />
                    <span>&nbsp;Day of Birth: Aug 20th</span>
                </div>
                <AppButton 
                    label="Download CV&nbsp;&nbsp;&nbsp;"
                    picture={{image: "/images/icons/download.svg", width: 14, height: 14}}
                />              
            </div>
        </header>
    )
}