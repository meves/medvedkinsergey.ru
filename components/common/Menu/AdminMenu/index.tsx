import Link from "next/link"
import { MenuItem } from "../../../../client/types"


export const AdminMenu = ({menuItems}: {menuItems: MenuItem[]}) => {
    
    return (
        <nav>
            <ul>
                {menuItems.map((item: MenuItem) => (
                    <li key={item.id}>
                        <Link href={item.path}>
                            <a>{item.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}