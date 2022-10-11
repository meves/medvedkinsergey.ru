import { useAppSelector } from "../../client/store"
import { selectSessionData } from "../../client/store/authSlice"
import { AdminLayout } from "../../components/common/Layout/AdminLayout"
import AccessDenied from "../101"

export default function AdminPage() {
    const session = useAppSelector(selectSessionData)

    if (session) {
        return (
            <AdminLayout>{}</AdminLayout>
        )
    }
    return (
        <AccessDenied/>
    )
}
