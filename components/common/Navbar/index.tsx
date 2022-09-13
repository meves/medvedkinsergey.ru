import Link from "next/link";
import React, { createRef } from "react";
import { Logo } from "../../widgets/Logo";
import { AppMenu } from "../Menu/AppMenu";
import { Socials } from "../../widgets/Socials";
import styles from './index.module.scss';
import { Icons } from "../../widgets/Icons";

const menuItems = [
    { id: 1, path: '/', title: 'Home' }, 
    { id: 2, path: '/blog', title: 'Blog'}, 
    { id: 3, path: '/admin', title: 'Admin'}, 
    
]

export const Navbar: React.FC = () => {
    const navRef = createRef<HTMLDivElement>() 
    const toggleMenu = () => {
        navRef.current?.classList.toggle('toggleMenu')
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.logo} title="Home">
                <Link href="/">
                    <a><Logo fill="#000d4b"/></a>                
                </Link>
            </div>
            <nav className={styles.blogMenu} title="My personal blog">
                <Link href="/blog">
                    <a>Blog</a>
                </Link>                    
            </nav>
            <div  className={styles.socials}> 
                <Socials width="23" height="23" fill="#000d4b" />
            </div>      
            <div 
                className={styles.burger} 
                title="menu" 
                onClick={toggleMenu}
            >      
                <Icons.Burger width="24" height="24" fill="#000d4b"/>
                <AppMenu menuItems={menuItems} ref={navRef}/>
            </div>
        </div>
    )
}
