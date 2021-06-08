import Head from "next/head";
import {MainLayout} from "../components/MainLayout";

const Posts = () => {
    return (
        <MainLayout>
            <Head>
                <title>
                    Posts Title
                </title>
            </Head>
            <h1>Posts Page</h1>
        </MainLayout>
    )
}

export default Posts;