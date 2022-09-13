import Link from 'next/link';
import { forwardRef } from 'react';
import { v4 } from 'uuid';
import { MenuItem } from '../../../../client/types';
import styles from './index.module.scss';


export const AppMenu = forwardRef<HTMLDivElement, {menuItems: MenuItem[]}>(({menuItems}, ref?) => {
    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        const nav = event.currentTarget
        nav.classList.toggle('toggleMenu')
    }
    return (
        <nav 
            ref={ref} 
            className={`${styles.appNav} toggleMenu`}
            onMouseLeave={handleMouseLeave}
        >
            <ul>
                {menuItems?.map(item => (
                    <li key={v4()}>
                        <Link href={item.path}>
                            <a>{ item.title }</a>
                        </Link>                        
                    </li>
                ))}
            </ul>
        </nav>
    )
})
