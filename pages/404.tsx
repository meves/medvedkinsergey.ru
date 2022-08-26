import Link from "next/link";
import { Layout } from "../components/Layout";

export default function NotFoundPage() {
    return (
        <div className="container">
            <Layout>
                <div className="page404">
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
            </Layout>

        </div>
    )
}