import Link from "next/link";
import React, { useRef } from "react";
import styles from './index.module.scss';

const worksDescriptions = [
    { id: 1, title: 'E-commerce site', description: 'E-commerce solution of online store "Quantum".' },
    { id: 2, title: 'E-commerce site', description: 'E-commerce solution of home appliances online store' },
    { id: 3, title: 'Landing Page', description: 'Landing page for personal growth training courses' },
    { id: 4, title: 'E-commerce site', description: 'E-commerce solution of real estate agency' },
    { id: 5, title: 'E-commerce site', description: "E-commerce solution of online children's goods store"},
    { id: 6, title: 'SPA Social Network', description: 'Example of developing part of a social network. React SPA' },
    { id: 7, title: 'SPA Card Game', description: 'Memory test computer game. React SPA' },
    { id: 8, title: 'Next App Blog', description: 'Full-stack blog application on Next framework' },
    { id: 9, title: 'SPA Github Users', description: 'Github user search app using React. SPA' },
]

export const MyWorks: React.FC = () => {
    return (
        <section className={styles.works}>
            <header className={styles.header}>
                <h1>My Works</h1>
                <p>There are some examples of my works. These are e-commerce sites,
                    realty agency site, landing page, React SPA: social network, 
                    github app and blog application on Next framework.  
                </p>
            </header>
            <div className={styles.gallery}>
                { worksDescriptions.map(work => (
                    <div 
                        key={work.id}   
                        className={styles.image} 
                    >
                        <div className={styles.description}>
                            <h3>{ work.title }</h3>
                            <p>{ work.description }</p>
                            <Link href="/">
                                <a>Go to site &rarr;</a>
                            </Link>
                        </div>
                    </div>
                )) }
            </div>
        </section>
    )
}