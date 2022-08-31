import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/common/Layout";

export default function NotFoundPage() {
    return (
        <div className="container">
            <Layout>
                <Head>
                    <title>
                        500 Internal server error
                    </title>
                </Head>
                <div className="error_page">
                    <h1 className="error">Internal server error</h1>
                    <h2 className="error">Error 500</h2>
                    <p>Please refer to 
                    <span>
                        <Link href="/">
                            <a> Home</a>
                        </Link>
                    </span>
                    </p>   
                </div>

                <style jsx>{`
                    a {
                        color: blue;
                    }
                `}</style>
            </Layout>

        </div>
    )
}