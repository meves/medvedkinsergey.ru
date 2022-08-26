import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "../../components/Layout";
import { Date } from "../../components/Date";
import { getAllPostIds, getPostData } from "../../lib/utils/blog";
import styles from './index.module.scss';


export default function Post({ 
    postData 
} : {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    return (
        <div className="container">
            <Layout>
                <Head>
                    <title>{ postData.title }</title>
                </Head>
                <div className={styles.blogContainer}>
                    <article>
                        <h1 className={styles.headingXl}>{ postData.title }</h1>
                        <div className={styles.lightText}>
                            <Date dateString={postData.date} />
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
                    </article>
                    <Link href="/blog">
                        <a>
                            <Image
                                priority
                                src="/images/author/Sergey_Medvedkin_230x230.jpg"
                                className={styles.borderCircle}
                                height={108}
                                width={108}
                                alt="Author Sergey Medvedkin"
                            />
                        </a>
                    </Link>
                    <h2 className={styles.headingLg}>
                        <Link href="/">
                            <a className={styles.colorInherit}>Sergey Medvedkin</a>
                        </Link>
                    </h2>
                    <div className={styles.backToHome}>
                        <Link href="/blog">
                            <a>← Back to Blog</a>
                        </Link>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.id as string);
    return {
        props: {
            postData
        }
    }
}