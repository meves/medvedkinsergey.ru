export type BodyType = (fields?: string | string[] | undefined, message?: any) => any

export type UserInput = {
    username: string
    email: string
    message: string
}

export type UserMessage = 
    string 
    | {
        username: string
        email: string
    } 
    | undefined

export type MenuItem = { 
    id: number
    path: string 
    title: string 
}