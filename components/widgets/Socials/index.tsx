import Link from 'next/link';
import { SocialIcons } from '../Icons';
import styles from './index.module.scss';


export const Socials = (
{ width, height, fill} : 
{ width: string, height: string, fill: string }) => {
    
    return (
        <div className={styles.socials}>
            {SocialIcons.map(Icon => (
                <Link key={Icon.id} href={Icon.link}>
                    <a target="_blank" title={Icon.title}>
                        <Icon.component width={width} height={height} fill={fill} />
                    </a>
                </Link>
            ))}
        </div>
    )
}