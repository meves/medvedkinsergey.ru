import Link from "next/link";
import React, { createRef, useEffect } from "react";
import { Logo } from "../../widgets/Logo";
import { AppMenu } from "../Menu/AppMenu";
import { Socials } from "../../widgets/Socials";
import styles from './index.module.scss';
import { Icons } from "../../widgets/Icons";
import { signOut, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../../client/store";
import { auth, selectSessionData } from "../../../client/store/authSlice";

const menuItems = [
    { id: 1, path: '/', title: 'Home' }, 
    { id: 2, path: '/blog', title: 'Blog'}, 
    { id: 3, path: '/admin', title: 'Admin'}, 
    
]

export const Navbar: React.FC = () => {
    const router = useRouter()
    const { data: session, status } = useSession()
    const username = useAppSelector(selectSessionData)?.user?.name
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(auth(status, session))
    }, [status, session, dispatch])
    
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
                {router.asPath !== '/' ? 
                    <Link href="/"><a>Home</a></Link> : 
                    <Link href="/blog"><a>Blog</a></Link>}                    
            </nav>
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
            <div className={styles.auth}>
                {session ? (
                    <span 
                        style={{textTransform: 'uppercase'}}
                        onClick={() => signOut()}>{username}</span>
                ) : (
                    <span onClick={() => signIn()}>Sign in</span>
                )
            }
            </div>
        </div>
    )
}
