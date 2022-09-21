import Head from "next/head";
import Link from "next/link";

export default function AccessDenied() {
    return (
        <>
        <Head>
            <title>101 Access denied</title>
        </Head>
        <div className="container">
            <div className="error_page">
                <h1 className="error">Access denied</h1>
                <h2 className="error">You haven&apos;t permission for this page</h2>
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