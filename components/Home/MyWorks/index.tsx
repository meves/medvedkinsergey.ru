import { useMemo } from "react";
import Link from "next/link";
import styles from './index.module.scss';



export const MyWorks: React.FC = () => {
    const worksDescriptions = useMemo(() => [
        { id: 1, picture: 'blog-next.png', path: '/blog', title: 'E-commerce site', description: 'E-commerce solution of online store "Quantum".' },
        { id: 2, picture: 'game-poker-card.png', path: '/', title: 'Landing Page', description: 'Landing page for personal growth training courses' },
        { id: 3, picture: 'github.png', path: '/', title: 'E-commerce site', description: 'E-commerce solution of real estate agency' },
        // { id: 4, picture: 'social-network.png', path: '/', title: 'Next App Blog', description: 'Full-stack blog application on Next framework' },
        // { id: 5, picture: 'device-shop.png', path: '/', title: 'E-commerce site', description: 'E-commerce solution of home appliances online store' },
        // { id: 6, picture: 'internet-shop.png', path: '/', title: 'E-commerce site', description: "E-commerce solution of online children's goods store"},
        // { id: 7, picture: 'quantum-shop.png', path: '/', title: 'SPA Social Network', description: 'Example of developing part of a social network. React SPA' },
        // { id: 8, picture: 'realty.png', path: '/', title: 'SPA Card Game', description: 'Memory test computer game. React SPA' },
        // { id: 9, picture: 'teta-healing.png', path: '/', title: 'SPA Github Users', description: 'Github user search app using React. SPA' },
    ], [])

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
                { worksDescriptions.map(item => (
                    <div 
                        key={item.id}   
                        className={styles.imageWrapper} 
                    >
                        <img className={styles.image} src={`/images/gallery/${item.picture}`} alt={item.title}/>
                        <div className={styles.description}>
                            <h3>{ item.title }</h3>
                            <p>{ item.description }</p>
                            <Link href={item.path}>
                                <a>Go to site &rarr;</a>
                            </Link>
                        </div>
                    </div>
                )) }
            </div>
        </section>
    )
}