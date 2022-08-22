import Image from "next/image";
import React from "react";
import styles from './index.module.scss';

export const AppButton = (
    { label, picture }: 
    { label: string,
        picture: {
        image: any,
        width: number,
        height: number
    }
    }) => {
    
    const downLoadFile = async () => {
        const response = await fetch('http://localhost:3000/files/resume/MedvedkinSergeyFrontendDeveloperCV.pdf')
        const data = response.blob
        console.log(data);
        
    }

    return (
        <button
            className={styles.button}
            onClick={downLoadFile}
        >{label} 
            <div className={styles.download}>
                <a><Image src={picture.image} width={picture.width} height={picture.height} /></a>
            </div>
        </button> 
    )
}