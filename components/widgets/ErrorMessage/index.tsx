import styles from './index.module.scss'

export const ErrorMessage = ({message} : {message: string}) => {
    if (message === '')
        return null
    return (
        <div className={styles.tableHead}>
            <p className={styles.errorMessage}>{message}</p>
        </div>
    )
}