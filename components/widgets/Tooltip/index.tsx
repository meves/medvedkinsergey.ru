import { forwardRef, MouseEvent, memo } from 'react'
import styles from './index.module.scss'

type Props = {
    tooltipText: string,
    top: string
    right: string
}

export const Tooltip = forwardRef<HTMLDivElement, Props>( function TooltipWithRef (props, ref) {
    const { tooltipText, top, right } = props
    const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        const div = event.currentTarget.parentElement
        if (div) {
            div.classList.toggle(`visibility`);
        }        
    }

    return (
        <div
            ref={ref}
            className={`${styles.tooltip} visibility`}
            style={{top: `${top}`, right: `${right}`}}
        > 
            { tooltipText }
            <button 
                className={styles.closeBtn} 
                onClick={handleButtonClick}>
                &#10006;
            </button>
        </div>
    )
})