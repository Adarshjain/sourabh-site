import {AppProps} from 'next/app'
import React from "react";
import '../css/reset.css';
import '../css/nav.css';
import '../css/common.css';
import '../css/section.css';
import '../css/imageCard.css';
import '../css/page.css';


function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp