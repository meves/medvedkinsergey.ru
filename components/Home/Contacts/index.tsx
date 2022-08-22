import React from "react";
import { Socials } from "../../Socials";
import styles from './index.module.scss';

export const Contacts: React.FC = () => {
    return (
        <section className={styles.contacts}>
            <div className={styles.info}>
                <h6>Write to me</h6>
                <h2 className={styles.title}>
                    Send me emails with your wishes and feedback.
                </h2>
                <div className={styles.contactInfo}>
                    <p>Krasnodar, Russia</p>
                    <p>Mon – Fri: 9:00 am – 6:00 pm</p>
                    <p>Sat: 9:00 am – 2:00 pm</p>
                    <p>meves.sergey@gmail.com</p>
                </div>
                <h2>Follow me</h2>
                <div className={styles.socials}>
                    <Socials width="20" height="20" fill="blue" />
                </div>
                <p className={styles.privacy}>&copy;2022 privacy policy</p>
            </div>
            <form className={styles.form}>
                <h1>Contact Me</h1>
                <div>
                    <input type="text" name="name" placeholder="Enter your Name" />
                </div>
                <div>
                    <input type="text" name="address" placeholder="Enter a valid email address" />
                </div>
                <div>
                    <textarea name="message" cols={30} rows={10} placeholder="Enter your message"></textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </section>
    )
}