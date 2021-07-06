import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

const About = () => {

    const linkHandler = () => {
        Router.push('/');
    }

    return (
        <MainLayout title='About Page'>
            <h1>About Page</h1>
            <button onClick={linkHandler}>Go back to home</button>
            <button onClick={() => Router.push('/posts')}>Go to posts</button>
        </MainLayout>
    )
}

export default About;