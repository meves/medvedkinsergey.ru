import { ChangeEvent, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../client/store"
import { selectPaginator, getClientMessages } from "../../../client/store/adminPanelSlice"
import { writeUrl } from "../../../lib/writeUrl"

export const CountSelect = () => {
    const {pageSize, currentPage} = useAppSelector(selectPaginator)
    const [selectedPageSize, setSelectedPageSize] = useState(pageSize)
    
    const handleCountChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const count = event.currentTarget.value
        setSelectedPageSize(Number(count))
    }
    
    const countValues = []
    for (let i = 1; i<= 10; i++) countValues.push(i)
    
    const dispatch = useAppDispatch()

    useEffect(() => {
        const requestedPage = Math.ceil((currentPage * pageSize) / selectedPageSize)
        writeUrl(String(requestedPage), String(selectedPageSize))
        dispatch(getClientMessages(requestedPage, selectedPageSize))
    }, [selectedPageSize, currentPage, pageSize, dispatch])

    return (
        <>
        <label htmlFor="count">Select number of rows on page</label>
        <select name="count" value={selectedPageSize} onChange={handleCountChange}>
            {countValues.map(val => (
                <option key={val} >{val}</option>
            ))}
        </select>
        </>
    )
}