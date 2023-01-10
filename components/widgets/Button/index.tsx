import Image from "next/image";
import { downLoadFile } from "../../../lib/downLoadFile";
import styles from './index.module.scss';


type Picture = {
    image: string,
    width: number,
    height: number
}

export const AppButton = ({label, picture } : {label: string, picture: Picture}) => {
        
    return (
        <button
            className={styles.button}
            onClick={() => downLoadFile(`/files/resume/MedvedkinSergeyFrontendDeveloperCV.pdf`)}
            title="Download resume"
        >{ label } 
            <div className={styles.download}>
                <a><Image src={picture.image} width={picture.width} height={picture.height} alt="download" /></a>
            </div>
        </button> 
    )
}