import React from "react"
import { AppProps } from "next/app"
import '../styles/globalStyles.scss'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from "recoil"

const MyApp: React.FC<AppProps> = ({ Component,
    pageProps: {session, ...pageProps} }) => {
    return (
        <SessionProvider session={session}>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </SessionProvider>
    )
}

export default MyApp
