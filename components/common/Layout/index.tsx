import { ReactNode } from "react"
import AppHead from "../Head"
import { Navbar } from "../Navbar"
import { Footer } from "../Footer"

export const Layout = ({ children } : { children: ReactNode }) => {
    return (
        <>
        <AppHead/>
        <Navbar/>
        { children }
        <Footer/>
        </>
    )
}
