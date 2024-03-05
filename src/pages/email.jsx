import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/Navbar";
import styles from "@/styles/email.module.css";
import Head from "next/head";

export default function Email() {
    function copyHTML() {}
    return (
        <>
            <Head>
                <title>EurekaHacks Email Generator</title>
                <meta name="theme-color" content="#22F0E7" />
                <meta property="og:title" content="EurekaHacks" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="noindex" />
            </Head>
            <NavBar />
            <div className={styles["header"]}>
                <div className={styles["curtain"]}>
                    <h1>Email Generator</h1>
                </div>
            </div>
            <div className={styles["email"]}>
                <p>
                    This page is meant for the EurekaHACKs team only, please do
                    not use this if you are not a member of the EurekaHACKs
                    team.
                </p>
                <div className={styles["email-content"]}>
                    <div className={styles["form"]}>
                        <h3>Content</h3>
                        <textarea className={styles["textarea"]}>
                            Hi, I am [Your Name] from [Your School] and I am
                            interested in participating in EurekaHacks 2021. I
                            have a few questions about the event and would like
                            to get in touch with the organizers. Could you
                            please provide me with more information about the
                            event? Thank you.
                        </textarea>
                    </div>
                    <div className={styles["preview"]}>
                        <h3>Preview</h3>
                        <p></p>
                    </div>
                </div>
                <button className={styles["button"]} onClick={copyHTML}>
                    Copy HTML
                </button>
            </div>
            <Footer />
        </>
    );
}
