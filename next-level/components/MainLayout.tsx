import Link from "next/link";
import Head from "next/head";

export const MainLayout = (props: {children: any, title: any}) => {
    return (
        <>
            <Head>
                <title> {props.title} | NextJS!</title>
                <meta name="keywords" content="js, next, react" />
            </Head>
            <nav>
                <Link  href="/">
                    <a>Home</a>
                </Link>
                <Link  href="/about">
                    <a>About</a>
                </Link>
                <Link  href="/posts">
                    <a>Posts</a>
                </Link>
            </nav>
            <main>
                {props.children}
            </main>
            <style jsx>{`
                    nav {
                        position: fixed;
                        height: 60px;
                        left: 0;
                        top: 0;
                        right: 0;
                        background: darkblue;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                    }
                    
                    nav a {
                        color: #fff;
                        text-decoration: none;
                    }
                    
                    main {
                        margin-top: 60px;
                        padding: 1rem;
                    }
                `}</style>
        </>
    )
}