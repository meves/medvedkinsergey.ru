//import 'dotenv/config'
import { ChangeEvent, FormEvent, useState } from 'react'
import { createUserMessage } from '../../../http/contactme'
import { UserInput, UserMessage } from '../../../types'
import styles from './index.module.scss'

type Props = {
    showTooltip: (message: string) => void
}

export const ContactsForm = ({ showTooltip } : Props) => {
    const [userInput, setUserInput] = useState<UserInput>({username: '', email: '', message: ''})
    
    const handleUserInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        setUserInput(prev => ({...prev, [name]: value}))
    }

    const submitForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setUserInput({username: '', email: '', message: ''})
        const serverMessage: UserMessage | string | undefined = await createUserMessage(userInput)
        if (typeof serverMessage === 'string' && serverMessage.length > 0) {
            showTooltip(serverMessage)
        } else {
            const sm = serverMessage as UserMessage
            const message = `${sm.username}, your message has been added.\n
                You are getting the answer to your email ${sm.email} later`
            showTooltip(message)
        }
    }

    return (
        <form className={styles.form} onSubmit={submitForm}>            
            <h1>Contact Me</h1>
            <div>
                <input 
                    onChange={handleUserInputChange}
                    value={userInput.username}
                    type="text" 
                    name="username" 
                    placeholder="Enter your Name" 
                    required
                    maxLength={50}
                    pattern="[a-zA-Z ]{1,}"
                    title="Name should be only alphabets"
                />
            </div>
            <div>
                <input 
                    onChange={handleUserInputChange}
                    value={userInput.email}
                    type="email" 
                    name="email" 
                    placeholder="Enter a valid email address"
                    required                            
                />
            </div>
            <div>
                <textarea 
                    onChange={handleUserInputChange}
                    value={userInput.message}
                    name="message" 
                    cols={30} rows={10} 
                    placeholder="Enter your message"
                    required
                    maxLength={300}
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}