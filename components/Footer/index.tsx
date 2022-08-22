import React from "react";
import styles from './index.module.scss';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="info">
                <p className={styles.author}>Site author: Sergey Medevedkin</p>
                <p className={styles.date}>
                    <time dateTime="2020-08-20">
                        Date of creation: 2020-08-20
                    </time>
                </p>
            </div>
            <div className="contacts">
                <p className={styles.telephone}>
                    <a href="tel:8-918-253-8109">Tel: 8-918-253-8109</a>
                </p>
                <p className={styles.email}>
                    <a href="mailto:meves.sergey@gmail.com">Email: meves.sergey@gmail.com</a>
                </p>
            </div>
        </footer>
    )
}