import { useRef, useCallback, useEffect } from "react";
import { Socials } from "../../widgets/Socials";
import { Tooltip } from "../../widgets/Tooltip";
import { ContactsForm } from "./ContactsForm";
import { selectContactMeMessage } from "../../../client/store/homePageSlice";
import { useAppSelector } from "../../../client/store";
import styles from './index.module.scss';


export const Contacts = () => {
    const contactMeMessage = useAppSelector(selectContactMeMessage)

    const tooltipRef = useRef<HTMLDivElement>(null)

    const showTooltip = useCallback(() => {
        tooltipRef.current?.classList.toggle(`visibility`)    
    }, [tooltipRef])

    useEffect(() => {
        showTooltip()
    }, [showTooltip, contactMeMessage])

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
                <Tooltip ref={tooltipRef} tooltipText={contactMeMessage} top="0px" right="0px"/>
                <ContactsForm />
            </div>
        </section>
    )
}