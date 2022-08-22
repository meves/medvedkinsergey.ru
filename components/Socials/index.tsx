import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GithubIcon } from './Githubicon';
import styles from './index.module.scss';
import { LinkedInIcon } from './LinkedInIcon';
import { TelegramIcon } from './TelegramIcon';
import { YoutubeIcon } from './YoutubeIcon';

export const Socials =(
    { width, height, fill} : 
    { width: string, height: string, fill: string }
    ) => {
    return (
        <div className={styles.socials}>
            <Link href="https://www.linkedin.com/in/medvedkinsergey">
                <a target="_blank" title="LinkedIn">
                    <LinkedInIcon width={width} height={height} fill={fill} />
                </a>
            </Link>
            <Link href="https://github.com/meves">
                <a target="_blank" title="GitHub">
                    <GithubIcon width={width} height={height} fill={fill} />
                </a>
            </Link>
            <Link href="https://t.me/medvedkinsergey">
                <a target="_blank" title="Telegram">
                    <TelegramIcon width={width} height={height} fill={fill} />
                </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCRZSHkl2GaeBSE4d-c8BRDw">
                <a target="_blank"  title="YouTube">
                    <YoutubeIcon width={width} height={height} fill={fill} />
                </a>
            </Link>
        </div>
    )
}