import Link from 'next/link';
import { v4 } from 'uuid';
import styles from './AppMenu.module.scss';

const menuItems = [
    { id: 1, path: '/quantum', title: 'Quantum store' }, 
    { id: 2, path: '/devices', title: 'Devices store'}, 
    { id: 3, path: '/healing', title: 'Teta Healing'}, 
    { id: 4, path: '/realty', title: 'Realty'}, 
    { id: 5, path: '/children', title: 'Childrens store'}, 
    { id: 6, path: '/social', title: 'Social Net'}, 
    { id: 7, path: '/memory', title: 'Memory game'}, 
    { id: 8, path: '/blog', title: 'Personal blog'}, 
    { id: 10, path: '/github', title: 'GitHub users'}
]


export const AppMenu = ({open} : {open: boolean}) => {
    return (
        <nav className={`${styles.appNav} ${!open ? 'closed' : ''}`}>
            <ul>
                {menuItems.map(item => (
                    <li key={v4()}>
                        <Link href={item.path}>
                            <a>{ item.title }</a>
                        </Link>                        
                    </li>
                ))}
            </ul>
        </nav>
    )
}