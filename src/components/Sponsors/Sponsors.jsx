import styles from "./Sponsors.module.css";
import SponsorBox from "./SponsorBox.jsx";
import { motion } from "framer-motion";
import Link from "next/link";

import APHS from "@/../public/apicon.png";
import WolframAlpha from "@/../public/Sponsors/wolfram.png";
import Echo3D from "@/../public/Sponsors/echo3d.png";
import InterviewCake from "@/../public/Sponsors/InterviewCake.png";
import WingsUp from "@/../public/Sponsors/WingsUp.png";
import Xyz from "@/../public/Sponsors/xyz.png";
import Sobeys from "@/../public/Sponsors/sobeys.png";
import Rotary from "@/../public/Rotary.jpg";
import Digitalent from "@/../public/Sponsors/digitalent.jpg";
import Staples from "@/../public/Sponsors/Staples.png";
import CryptoChicks from "@/../public/Sponsors/cryptochicks.png";
import OTech from "@/../public/Sponsors/Otech.png";
import NoFrills from "@/../public/Sponsors/olegs.png";
import HDSB from "@/../public/Sponsors/hdsb.jpg";
import FRC from "@/../public/Sponsors/frc.png";
import ISTORM from "@/../public/Sponsors/istorm-logo.png";
import Film from "@/../public/Sponsors/film.jpg";
import Shoppers from "@/../public/Sponsors/Shoppers.png";
import Tims from "@/../public/Sponsors/TH.png";

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
                <motion.div
                    {...sponsorBoxFadeIn}
                    className={styles["plat-sponsors"]}
                >
                    <SponsorBox
                        name="WingsUp"
                        image={WingsUp}
                        link="https://www.wingsup.com/"
                        className={styles["wingsup"]}
                    />

                    <SponsorBox
                        name="Rotary"
                        image={Rotary}
                        link="https://portal.clubrunner.ca/162"
                    />

                    <SponsorBox
                        name="Digitalent"
                        image={Digitalent}
                        link="https://www.hiredigitalent.com/"
                    />

                    <SponsorBox
                        name="iStorm"
                        image={ISTORM}
                        link="https://www.istorm.ca/"
                    />
                </motion.div>

                <motion.div
                    {...sponsorBoxFadeIn}
                    className={styles["gold-sponsors"]}
                >
                    <SponsorBox
                        name="Wolfram Alpha"
                        image={WolframAlpha}
                        link="https://www.wolframalpha.com/"
                        className={styles["wolfram"]}
                    />

                    <SponsorBox
                        name="Ontario Tech"
                        image={OTech}
                        link="https://engineering.ontariotechu.ca/outreach/"
                    />
                </motion.div>

                <motion.div
                    {...sponsorBoxFadeIn}
                    className={styles["silver-sponsors"]}
                >
                    <SponsorBox
                        name="Interview Cake"
                        image={InterviewCake}
                        link="https://www.interviewcake.com/"
                        className={styles["cake"]}
                    />

                    <SponsorBox
                        name="xyz"
                        image={Xyz}
                        link="https://xyz.xyz/"
                    />

                    <SponsorBox
                        name="No Frills"
                        image={NoFrills}
                        link="https://www.nofrills.ca/store-locator/details/3150"
                    />

                    <SponsorBox
                        name="Shoppers"
                        image={Shoppers}
                        link="https://www.shoppersdrugmart.ca/"
                    />

                    <SponsorBox
                        name="Tim Hortons"
                        image={Tims}
                        link="https://www.timhortons.ca/"
                    />
                </motion.div>

                <motion.div
                    {...sponsorBoxFadeIn}
                    className={styles["bronze-sponsors"]}
                >
                    <SponsorBox
                        name="Echo3D"
                        image={Echo3D}
                        link="https://www.echo3d.com/"
                    />

                    <SponsorBox
                        name="Sobeys"
                        image={Sobeys}
                        link="https://www.sobeys.com/"
                    />

                    <SponsorBox
                        name="Staples"
                        image={Staples}
                        link="https://www.staples.ca/"
                    />

                    <SponsorBox
                        name="CryptoChicks"
                        image={CryptoChicks}
                        link="https://www.cryptochicks.ca//"
                    />

                    <SponsorBox
                        name="Film.ca"
                        image={Film}
                        link="https://www.film.ca//"
                    />
                </motion.div>

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

                    <SponsorBox
                        name="HDSB"
                        image={HDSB}
                        link="https://hdsb.ca/"
                    />

                    <SponsorBox
                        name="1360 Robotics"
                        image={FRC}
                        link="https://1360.ca/"
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
                    <a
                        href="/donate"
                        target="_blank"
                        className={styles["howtosponsor"]}
                    >
                        <div className={styles["button"]}>
                            Looking to make a donation?
                        </div>
                    </a>
                </motion.div>
            </div>

            <p></p>
        </section>
    );
}
