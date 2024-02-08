import Head from "next/head";
import styles from "@/styles/register.module.css";
import NavBar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";
import { useState, useEffect } from "react";

export default function Register() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const scriptTag = document.createElement("script");
        scriptTag.src = "https://tally.so/widgets/embed.js";
        scriptTag.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(scriptTag);
    }, []);
    return (
        <div className={styles.tally}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <title>EurekaHACKS 2024 Registration Form</title>
                <style>
                    {`
                        iframe {
                            border: none;
                        }
                    `}
                </style>
            </Head>
            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                    Tally.loadEmbeds();
                }}
            />
            <NavBar />
            <iframe
                data-tally-src="https://tally.so/embed/w8xv4A?transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="2464"
                loading="eager"
                title="EurekaHACKS 2024 Registration Form"
            />
            <Footer />
        </div>
    );
}
