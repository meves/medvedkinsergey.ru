import { Filter } from "./Filter";
import { Table } from "./Table";
import styles from './index.module.scss'
import { ErrorMessage } from "../../widgets/ErrorMessage";
import { useState } from "react";
import { Paginator } from "../../widgets/Paginator";


export default function ClientMessages() {
    // local state
    const [errorText, setErrorText] = useState<string>('')
    
    return (
        <section className={styles.messages_page}>
            <div className={styles.filter}>
                <Filter/>
            </div>
            <div className={styles.messages_block}>
                <ErrorMessage message={errorText}/>
                <Paginator/>
                <Table setErrorText={setErrorText}/>
            </div>
        </section>
    )
}

