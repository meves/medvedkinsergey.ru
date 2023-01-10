import React, { createRef, useCallback, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, signIn, useSession } from "next-auth/react";
import { AppMenu } from "../Menu/AppMenu";
import { Logo } from "../../widgets/Logo";
import { Socials } from "../../widgets/Socials";
import { Icons } from "../../widgets/Icons";
import { useAppDispatch, useAppSelector } from "../../../client/store";
import { auth, selectSessionData } from "../../../client/store/authSlice";
import styles from './index.module.scss';


export const Navbar: React.FC = () => {
    const router = useRouter()
    const { data: session, status } = useSession()

    const username = useAppSelector(selectSessionData)?.user?.name
    const dispatch = useAppDispatch()
    
    const navRef = createRef<HTMLDivElement>() 
    
    const menuItems = useMemo(() => ([
            { id: 1, path: '/', title: 'Home' }, 
            { id: 2, path: '/blog', title: 'Blog'}, 
            { id: 3, path: '/admin', title: 'Admin'}             
    ]), [])
    
    useEffect(() => {
        dispatch(auth(status, session))
    }, [status, session, dispatch])
    
    
    const toggleMenuVisibility = useCallback(() => {
        navRef.current?.classList.toggle('visibility')
    }, [navRef])

    return (
        <div className={styles.navbar}>
            <div className={styles.logo} title="Home">
                <Link href="/">
                    <a><Logo fill="#000d4b"/></a>                
                </Link>
            </div>
            <nav className={styles.blogMenu} title="My personal blog">
                { router.asPath !== '/' 
                    ? <Link href="/"><a>Home</a></Link>
                    : <Link href="/blog"><a>Blog</a></Link>
                }                    
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
                        onClick={() => signOut()}>
                        { username }
                    </span>
                ) : (
                    <span onClick={() => signIn()}>
                        Sign in
                    </span>
                )
            }
            </div>
        </div>
    )
}
