import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

interface AboutPageProps {
    title: string
}

const About = ({title}: AboutPageProps) => {

    const linkHandler = () => {
        Router.push('/');
    }

    return (
        <MainLayout title='About Page'>
            <h1>{title}</h1>
            <button onClick={linkHandler}>Go back to home</button>
            <button onClick={() => Router.push('/posts')}>Go to posts</button>
        </MainLayout>
    )
}

About.getInitialProps = async () => {
    const response = await fetch(`${process.env.API_URL}/about`);
    const data = await response.json();

    return {
        title: data.title
    }
}

export default About;