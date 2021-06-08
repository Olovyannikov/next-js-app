import './../styles/main.css'

const MyApp = (props: {Component: any, pageProps: any}) => {
    return (
        <>
            <props.Component {...props.pageProps} />
        </>
    )
}

export default MyApp;