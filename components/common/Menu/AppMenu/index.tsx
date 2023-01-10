import { forwardRef, useCallback } from 'react';
import Link from 'next/link';
import { MenuItem } from '../../../../client/types';
import styles from './index.module.scss';

type Props = {
    menuItems: MenuItem[]
}

export const AppMenu = forwardRef<HTMLDivElement, Props>( function AppMenuWithRef({ menuItems }, ref?) {

    const handleMouseLeave = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        const nav = event.currentTarget
        nav.classList.toggle('visibility')
    }, [])

    return (
        <nav 
            ref={ref} 
            className={`${styles.appNav} visibility`}
            onMouseLeave={handleMouseLeave}
        >
            <ul>
                {menuItems?.map(item => (
                    <li key={item.id}>
                        <Link href={item.path}>
                            <a>{ item.title }</a>
                        </Link>                        
                    </li>
                ))}
            </ul>
        </nav>
    )
} )
