import Link from "next/link";
import React, { createRef } from "react";
import { Logo } from "../../widgets/Logo";
import { AppMenu } from "../Menu/AppMenu";
import { Socials } from "../../widgets/Socials";
import styles from './index.module.scss';
import { Icons } from "../../widgets/Icons";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const menuItems = [
    { id: 1, path: '/', title: 'Home' }, 
    { id: 2, path: '/blog', title: 'Blog'}, 
    { id: 3, path: '/admin', title: 'Admin'}, 
    
]

export const Navbar: React.FC = () => {
    const router = useRouter()
    const { data: session } = useSession()
    console.log('session', session);

    const navRef = createRef<HTMLDivElement>() 
    const toggleMenuVisibility = () => {
        navRef.current?.classList.toggle('visibility')
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
            <div>
                {session ? (
                    <button onClick={() => signOut()}>Sign out</button>
                ) : (
                    <button onClick={() => router.push('/api/auth/signin')}>Sign in</button>
                )
            }
            </div>
            <div  className={styles.socials}> 
                <Socials width="23" height="23" fill="#000d4b" />
            </div>      
            <div 
                className={styles.burger} 
                title="menu" 
                onClick={toggleMenuVisibility}
            >      
                <Icons.Burger width="24" height="24" fill="#000d4b"/>
                <AppMenu menuItems={menuItems} ref={navRef}/>
            </div>
        </div>
    )
}
