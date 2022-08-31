import { createRef, useState } from "react";
import { Socials } from "../../widgets/Socials";
import { Tooltip } from "../../widgets/Tooltip";
import { ContactsForm } from "./ContactsForm";
import styles from './index.module.scss';


export const Contacts = () => {
    const [tooltip, setTooltip] = useState('');
    const tooltipRef = createRef<HTMLDivElement>()

    const showTooltip = (message: string) => {
        setTooltip(message)
        tooltipRef.current?.classList.toggle(`visibility`)    }
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
            <div className={styles.formWrapper}>
                <Tooltip ref={tooltipRef} tooltipText={tooltip} top="0px" right="0px"/>
                <ContactsForm showTooltip={showTooltip} />
            </div>
        </section>
    )
}