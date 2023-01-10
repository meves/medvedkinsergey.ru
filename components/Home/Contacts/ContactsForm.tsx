import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { UserInput } from '../../../client/types'
import { useAppDispatch } from '../../../client/store'
import { sendUserMessage } from '../../../client/store/homePageSlice'
import styles from './index.module.scss'

export const ContactsForm = () => {
    const [userInput, setUserInput] = useState<UserInput>({username: '', email: '', message: ''})
    const dispatch = useAppDispatch()
    
    const handleUserInputChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        setUserInput(prev => ({...prev, [name]: value}))
    }, [setUserInput])

    const submitForm = useCallback(async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(sendUserMessage(userInput))
        setUserInput({username: '', email: '', message: ''}) 
    }, [dispatch, userInput, setUserInput])

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