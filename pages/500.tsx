import Head from "next/head";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <>
        <Head>
            <title>
                500 Internal server error
            </title>
        </Head>
        <div className="container">
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
        </div>
        </>
    )
}