export type BodyType = (fields?: string | string[] | undefined, message?: any) => any

export type UserInput = {
    username: string
    email: string
    message: string
}

export type UserMessage = {
    id: number
    username: string
    email: string
    message: string
}