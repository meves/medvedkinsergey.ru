export type AuthStatus = "authenticated" | "unauthenticated" | "loading"

export type Session = {
    expires: string
    id?: number
    user?: {
        email?: string | null | undefined
        name?: string | null | undefined
        image?: string | null | undefined
    } 
}
