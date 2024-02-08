import React from "react";
import styles from "./Sponsors.module.css";
import SponsorBox from "./SponsorBox.jsx";
import { motion } from "framer-motion";

import APHS from "@/../public/apicon.png";
import WolframAlpha from "@/../public/Sponsors/wolfram.png";
import Echo3D from "@/../public/Sponsors/echo3d.png";
import InterviewCake from "@/../public/Sponsors/InterviewCake.png";
import WingsUp from "@/../public/Sponsors/WingsUp.png";
import Xyz from "@/../public/Sponsors/xyz.png";

const fadeIn = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 1 },
    },
    viewport: { once: true, amount: 0.8 },
};

const shapeFadeIn = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 1, delay: 0.5 },
    },
    viewport: { once: true, amount: 1 },
};

const sponsorBoxFadeIn = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 1 },
    },
    viewport: { once: true, amount: 0.8 },
};

export default function Sponsors() {
    return (
        <section
            id="sponsors"
            className={styles.sponsors}
            data-nosnippet={true}
        >
            <div className={styles["shape-container"]}>
                <motion.div className={styles.shape1} {...shapeFadeIn} />
                <motion.div className={styles.shape2} {...shapeFadeIn} />
            </div>
            <motion.h2 {...fadeIn}>Sponsors</motion.h2>
            <div className={styles["sponsor-panel"]}>
                {
                    <motion.div
                        {...sponsorBoxFadeIn}
                        className={styles["plat-sponsors"]}
                    >
                        <SponsorBox
                            name="WingsUp!"
                            image={WingsUp}
                            link="https://www.wingsup.com/"
                        />
                    </motion.div>
                }
                <motion.div
                    {...sponsorBoxFadeIn}
                    className={styles["gold-sponsors"]}
                >
                    <SponsorBox
                        name="Wolfram Alpha"
                        image={WolframAlpha}
                        link="https://www.wolframalpha.com/"
                    />
                </motion.div>
                {
                    <motion.div
                        {...sponsorBoxFadeIn}
                        className={styles["silver-sponsors"]}
                    >
                        <SponsorBox
                            name="Interview Cake"
                            image={InterviewCake}
                            link="https://www.interviewcake.com/"
                        />

                        <SponsorBox
                            name="xyz"
                            image={Xyz}
                            link="https://xyz.xyz/"
                        />
                    </motion.div>
                }
                {
                    <motion.div
                        {...sponsorBoxFadeIn}
                        className={styles["bronze-sponsors"]}
                    >
                        <SponsorBox
                            name="Echo3D"
                            image={Echo3D}
                            link="https://www.echo3d.com/"
                        />
                    </motion.div>
                }
                <motion.h2 {...fadeIn}>Our Partners</motion.h2>
                <motion.div
                    {...sponsorBoxFadeIn}
                    className={styles["partners"]}
                >
                    <SponsorBox
                        name="Abbey Park"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                </motion.div>
                <motion.div
                    transition={{
                        duration: 2,
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                    }}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.9 }}
                    className={styles["howtosponsor-outline"]}
                    {...fadeIn}
                >
                    <div className={styles["howtosponsor"]}>
                        <div className={styles["button"]}>
                            <a href="mailto:sponsorships@eurekahacks.ca">
                                Interested in sponsoring our event? Email us at
                                sponsorships@eurekahacks.ca
                            </a>
                        </div>
                    </div>
                </motion.div>
                {/* <motion.div
                    transition={{
                        duration: 2,
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                    }}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.9 }}
                    className={styles["howtosponsor-outline"]}
                    {...fadeIn}
                >

                    <div className={styles["howtosponsor"]}>
                        <div className={styles["button"]}>
                            <a href="/donate">
                                Looking to make a donation?
                            </a>
                        </div>
                    </div>
                </motion.div> */}
            </div>

            <p></p>
        </section>
    );
}
