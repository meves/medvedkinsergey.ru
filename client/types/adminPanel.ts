export type ClientMessage = {
    id: number
    username: string
    email: string
    message: string
    created_date: Date
    checked: boolean
}

export type Paginator = {
    currentPage: number
    pageSize: number
    totalCount: number
    blockSize: number
}