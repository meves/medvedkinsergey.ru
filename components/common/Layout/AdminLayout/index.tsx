import Head from "next/head"
import React from "react"
import { useAppSelector } from "../../../../client/store"
import { selectAuthStatus, selectSessionData } from "../../../../client/store/authSlice"
import AccessDenied from "../../../../pages/101"
import { Preloader } from "../../../widgets/Preloader"
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
    const status = useAppSelector(selectAuthStatus)
    const session = useAppSelector(selectSessionData)
    const username = session?.user?.name

    return (
            <>
            <Head>
                <title>Admin panel</title>
            </Head>
            <div className="container">
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
            </>
        )

    if (session && username === 'admin') {
        return (
            <>
            <Head>
                <title>Admin panel</title>
            </Head>
            <div className="container">
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
            </>
        )
    } 
    else if (session && username !== 'admin') {
        return <AccessDenied/>
    } else if (session && status === 'loading') {
        return (
            <div className="container" style={{width: '90%'}}>
                <Preloader/>
            </div>
        ) 
    } else if (!session) {
        return (
            <AccessDenied/>
        ) 
    }
    return null
}