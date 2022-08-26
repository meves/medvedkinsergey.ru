import { createReadStream } from "fs";
import Image from "next/image";
import React, { createRef, useCallback } from "react";
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
    
    const downLoadFile = useCallback(async () => {
        const filename = 'MedvedkinSergeyFrontendDeveloperCV.pdf';
        const url = `http://localhost:3000/files/resume/${filename}`;
        const response = await fetch(url, { headers: {'Content-Type': 'application/pdf;charset=UTF-8'} });
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);    
        open(objectUrl);
        URL.revokeObjectURL(objectUrl);
    }, [])

    return (
        <button
            className={styles.button}
            onClick={downLoadFile}
            title="Download resume"
        >{label} 
            <div className={styles.download}>
                <a><Image src={picture.image} width={picture.width} height={picture.height} alt="download" /></a>
            </div>
        </button> 
    )
}