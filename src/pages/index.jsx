import React from "react";
import styles from "@/styles/index.module.css";
import { motion } from "framer-motion";

import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Sponsors from "@/components/Sponsors/Sponsors";
import NavBar from "@/components/NavBar/Navbar";
import Stats from "@/components/Stats/Stats";
import Why from "@/components/Why/Why";
import Team from "@/components/Team/Team";
import Head from "next/head";

const hrFadeIn = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 1 },
    },
    viewport: { once: true, amount: 0.8 },
};

export default function Home() {
    const hr = (
        <motion.div {...hrFadeIn}>
            <hr />
        </motion.div>
    );
    return (
        <>
            <Head>
                <title>EurekaHacks 2024</title>
                <meta name="theme-color" content="#22F0E7" />
                <meta property="og:title" content="EurekaHacks" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://eurekahacks.ca" />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/pPsYsv6.png"
                />
                <meta
                    property="og:description"
                    content="EurekaHACKS is Abbey Park High School's annual hackathon. Join us on May 4th for 14 hours of coding, mentorship & fun (+ free food!)"
                />
                <meta
                    property="description"
                    content="EurekaHACKS is Abbey Park High School's annual hackathon. Join us on May 4th for 14 hours of coding, mentorship & fun (+ free food!)"
                />
            </Head>
            <NavBar />
            <Header />
            <div className={styles.home_content}>
                {hr}
                <About />
                <Stats />
                {hr}
                <Why />
                {hr}
                <Sponsors />
                {hr}
                <FAQ />
                {hr}
                <Team />
            </div>
            <Footer />
        </>
    );
}
