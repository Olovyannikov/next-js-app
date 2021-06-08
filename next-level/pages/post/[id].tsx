import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";

const Post = () => {
    const router = useRouter();
    return (
        <MainLayout title="">
            <h1>Simple post</h1>
            <p>{router.query.id}</p>
        </MainLayout>
    )
}

export default Post;