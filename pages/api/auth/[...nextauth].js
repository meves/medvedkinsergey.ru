import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    // configurations of authentication providers
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: 'Name', type: 'text', placeholder: 'Your name'},
                email: { label: 'Email', type: 'email', placeholder: 'email@test.com' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize (credentials, req) {
                // database lookup
                // select record from db where emal = credentials?.email
                // if there are not records return email or password is incorrect
                // if record is, check password
                // if password is incorrect return email or password is incorrect
                // if password correct return { id, name, email }
                if (credentials?.username === 'admin', credentials?.email === 'sergey@mail.ru' && credentials.password === 'test') {
                    return {
                        id: 2,
                        name: 'admin',
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