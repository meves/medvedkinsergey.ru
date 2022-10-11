import { GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Date } from "../../components/widgets/Date"
import { getSortedPostsData } from "../../lib/blog"
import styles from './index.module.scss'

const BlogPage = ({
    allPostsData
} : {
    allPostsData: {
        id: string
        title: string
        date: string
    }[]
}) => {
    return (
        <>
        <Head>
            <title>Blog of Sergey Medvedkin</title>
        </Head>
        <div className="container">
            <div  className={styles.blogContainer}>
                <Image
                    priority
                    src="/images/author/Sergey_Medvedkin_230x230.jpg"
                    className={styles.borderCircle}
                    height={144}
                    width={144}
                    alt="Author Sergey Medvedkin"
                />
                <h1 className={styles.heading2Xl}>Sergey Medvedkin</h1>
                <section className={styles.headingMd}>
                    <p>Hi there, I am Sergey Medvedkin</p>
                    <p>This is my blog. Let&apos;s talk about technologies and tools of modern web development.</p>
                    
                </section>
                <section className={`${styles.headingMd} ${styles.padding1px}`}>
                    <h2 className={styles.headingLg}>Blog</h2>
                    <ul className={styles.list}>
                    { allPostsData.map(({id, date, title}) => (
                        <li className={styles.listItem} key={id}>
                            <Link href={`/blog/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br/>
                            <small className={styles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                    </ul>
                </section>   
            </div>            
        </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}

export default BlogPage;