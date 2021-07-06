import {useState, useEffect} from "react";
import Link from "next/link";
import {MainLayout} from "../../components/MainLayout";
import {useRouter} from "next/router";
import {Spinner} from "../../components/Spinner";
import {NextPageContext} from "next";
import {MyPost} from "../../interfaces/post";

interface PostPageProps {
    post: MyPost
}

const Post = ( { post: serverPost }: PostPageProps) => {
    const [post, setPost] = useState(serverPost);
    const router = useRouter();

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await response.json();
            setPost(data)
        }

        if (!serverPost) {
            load();
        }
    }, []);

    if (!post) {
        return (
            <MainLayout title={''}>
                <Spinner/>
            </MainLayout>
        )
    }

    return (
        <MainLayout title="">
            <h1>{post.title}</h1>
            <hr/>
            <p>{post.body}</p>
            <Link href={'/posts'}>
                <a>Back to All posts</a>
            </Link>
        </MainLayout>
    )
}

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

export async function getInitialProps({query}: PostNextPageContext) {
    const response = await fetch(`${process.env.API_URL}/posts/${query.id}`);
    const post: MyPost = await response.json();

    return {
        post
    }
}

export default Post;