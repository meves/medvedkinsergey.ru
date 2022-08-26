import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "../Logo";
import { AppMenu } from "../Menu/AppMenu";
import { Socials } from "../Socials";
import styles from './index.module.scss';

export const Navbar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    
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
            <div className={styles.menu} title="menu" onClick={() => setOpen(prevOpen => !prevOpen)}>
                <AppMenu  open={open}/>
                {/*&#9776;*/}
            </div>
        </div>
    )
}