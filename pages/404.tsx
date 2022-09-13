import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/common/Layout";

export default function NotFoundPage() {
    return (
        <>
        <Head>
            <title>404 Page not found</title>
        </Head>
        <div className="container">
            <div className="error_page">
                <h1 className="error">The Page is not found</h1>
                <h2 className="error">Error 404</h2>
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
        </div>
        </>
    )
}