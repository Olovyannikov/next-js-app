import {useState, useEffect} from "react";
import Head from "next/head";
import Link from "next/link";
import {MainLayout} from "../components/MainLayout";

const Posts = ({posts: serverPosts}: any) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4200/posts')
            const json = await response.json();
            setPosts(json);
        }

        if (!serverPosts) {
            load();
        }
    }, []);

    if (!posts) {
        return (
            <MainLayout title={''}>
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout title={'Posts'}>
            <Head>
                <title>
                    Posts Title
                </title>
            </Head>
            <h1>Posts Page</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req}: any) => {
    if (!req) {
        return {
            posts: null
        }
    }
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json();

    return {
        posts
    }
}

export default Posts;


