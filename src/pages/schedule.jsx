import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/Navbar";
import TimeTable from "@/components/TimeTable/TimeTable";
import styles from "@/styles/schedule.module.css";
import { timeTableData } from "@/components/TimeTable/events";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>EurekaHacks Event Schedule</title>
                <meta name="theme-color" content="#22F0E7" />
                <meta property="og:title" content="EurekaHacks" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://eurekahacks.ca/schedule"
                />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/pPsYsv6.png"
                />
                <meta
                    property="og:description"
                    content="Abbey Park High School's annual hackathon. Join us on May 4th for 14 hours of coding, mentorship & fun (+ free food!)"
                />
                <meta
                    property="description"
                    content="Abbey Park High School's annual hackathon. Join us on May 4th for 14 hours of coding, mentorship & fun (+ free food!)"
                />
            </Head>
            <NavBar />
            <div className={styles["header"]}>
                <div className={styles["curtain"]}>
                    <h1>Event Schedule</h1>
                </div>
            </div>
            <div className={styles["schedule"]}>
                <TimeTable {...timeTableData} />
            </div>
            <Footer />
        </>
    );
}
