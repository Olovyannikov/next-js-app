import Link from 'next/link';
import {MainLayout} from "../components/MainLayout";
import s from '../styles/error.module.scss';

const ErrorPage = () => {
    return (
        <MainLayout title={'Not Found'}>
            <h1 className={s.error}>Error 404 | Not Found</h1>
            <p>Please go to
                <Link href='/'><a> safety</a></Link>
            </p>
        </MainLayout>
    )
}

export default ErrorPage;