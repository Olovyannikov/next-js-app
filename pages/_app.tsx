import './../styles/main.css'
import NextNProgress from "nextjs-progressbar";

const MyApp = (props: {Component: any, pageProps: any}) => {
    return (
        <>
            <NextNProgress
                color={'#29d'}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <props.Component {...props.pageProps} />
        </>
    )
}

export default MyApp;