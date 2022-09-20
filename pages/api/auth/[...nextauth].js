import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    // configurations of authentication providers
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: 'Email', type: 'email', placeholder: 'email@test.com' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize (credentials, req) {
                // database lookup
                if (credentials?.username === 'sergey@mail.ru' && credentials.password === 'test') {
                    return {
                        id: 2,
                        name: 'Sergey',
                        email: 'sergey@mail.ru'
                    }
                }
                // login failed
                return null
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            // first time jwt callback is run, user object is available
            if (user) {
                token.id = user.id
            }
            return token
        },
        session: ({ session, token }) => {
            if (token) {
                session.id = token.id
            }
            return session
        }
    },
    secret: 'test',
    jwt: {
        secret: 'test',
        encryption: true
    },
    // pages: {
    //     signIn: 'auth/signin'
    // }
}

export default NextAuth(authOptions)