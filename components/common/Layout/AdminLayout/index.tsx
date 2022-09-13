import Head from "next/head"
import React from "react"
import { AdminMenu } from "../../Menu/AdminMenu"
import styles from './index.module.scss'


const menuItems = [
    { id: 1, path: `/admin/client-messages`, title: 'Client messages' }, 
    { id: 2, path: '/devices', title: 'Devices store'}, 
    { id: 3, path: '/healing', title: 'Teta Healing'}, 
    { id: 4, path: '/realty', title: 'Realty'}, 
    { id: 5, path: '/children', title: 'Childrens store'}, 
    { id: 6, path: '/social', title: 'Social Net'}, 
    { id: 7, path: '/memory', title: 'Memory game'}, 
    { id: 8, path: '/blog', title: 'Personal blog'}, 
    { id: 10, path: '/github', title: 'GitHub users'}
]

export const AdminLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="container">
        <Head>
            <title>Admin panel</title>
        </Head>
            <h1 className={styles.title}>Admin Panel</h1>
            <div className={styles.wrapper}>
                <div className={styles.menu}>
                    <AdminMenu menuItems={menuItems}/>
                </div>
                <div className={styles.view}>
                    { children }                            
                </div>
            </div>
        </div>
    )
}