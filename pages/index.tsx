import Link from 'next/link';
import {MainLayout} from "../components/MainLayout";

const Index = () => {
    return (
        <MainLayout title='Home Page'>
            <h1>Hello Next!</h1>
            <Link href="/about">
                <a>About</a>
            </Link>
            <br/>
            <Link href="/posts">
                <a>Posts</a>
            </Link>
        </MainLayout>
    )
}

export default Index;