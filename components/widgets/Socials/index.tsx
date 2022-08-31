import Link from 'next/link';
import { Icons } from '../Icons';
import styles from './index.module.scss';


export const Socials =(
    { width, height, fill} : 
    { width: string, height: string, fill: string }
    ) => {
    return (
        <div className={styles.socials}>
            <Link href="https://www.linkedin.com/in/medvedkinsergey">
                <a target="_blank" title="LinkedIn">
                    <Icons.LinkedIn width={width} height={height} fill={fill} />
                </a>
            </Link>
            <Link href="https://github.com/meves">
                <a target="_blank" title="GitHub">
                    <Icons.Github width={width} height={height} fill={fill} />
                </a>
            </Link>
            <Link href="https://t.me/medvedkinsergey">
                <a target="_blank" title="Telegram">
                    <Icons.Telegram width={width} height={height} fill={fill} />
                </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCRZSHkl2GaeBSE4d-c8BRDw">
                <a target="_blank"  title="YouTube">
                    <Icons.Youtube width={width} height={height} fill={fill} />
                </a>
            </Link>
        </div>
    )
}