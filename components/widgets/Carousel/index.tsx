import { useState } from 'react'
import styles from './index.module.scss'


export const Carousel = ({count} : {count: number}) => {
    const [current, setCurrent] = useState(1)    
    
    const images = []
    for (let i = 1; i <= count; i++) {
        images.push(i)
    }

    const handleRightClick = () => {
        current >= 1 && current < count 
            ? setCurrent((prevCurrent) => prevCurrent + 1) 
            : setCurrent(1)        
    }

    const handleLeftClick = () => {
        current <= count && current > 1
            ? setCurrent((prevCurrent) => prevCurrent - 1)
            : setCurrent(count)
    }

    return (
        <div className={styles.carouselWrapper}>
            <button
                onClick={handleLeftClick}
            >&lArr;</button>
            <div className={styles.carousel}>
                {images.map(i => (
                    <SliderImage 
                        path={`/images/nature/nature_${i}.jpeg`} 
                        label="nature" 
                        w={275} 
                        h={183} 
                        key={i}
                        index={i}
                        current={current} 
                    />
                ))}
            </div>
            <button
                onClick={handleRightClick}
            >&rArr;</button>
        </div>
    )
}

type Props = {
    path: string
    label: string
    w: number
    h: number
    index: number
    current: number
}

export const SliderImage = (props: Props) => {
    const { path, label, w, h, index, current } = props
        return (
            <img 
                src={path} 
                alt={label} 
                width={w} 
                height={h}      
                className={index !== current ? 'visibility' : ''}                      
            />
        )
}