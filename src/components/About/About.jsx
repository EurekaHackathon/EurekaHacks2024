import styles from "./About.module.css";
import AboutImage from "@/../public/About/img.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const shapeFadeIn = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 1, delay: 0.5 },
    },
    viewport: { once: true, amount: 1 },
};

export default function About() {
    return (
        <motion.section
            id="about"
            className={styles.about}
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: { duration: 1 },
            }}
            viewport={{ once: true, amount: 0.8 }}
        >
            <div className={styles["about-text"]}>
                <div className={styles["about-info"]}>
                    <h3>Where Ideas Meet Innovation</h3>
                    <p>
                        EurekaHACKS is an annual 12-hour hackathon hosted at
                        Abbey Park High School in Oakville, Canada. It is one of
                        the largest high school hackathons in Halton. Last year,
                        our exciting event featured workshops, fun activities,
                        and over $5,900 worth of prizes! We&apos;re committed to
                        inspiring students of all skill levels to put their
                        creativity and knowledge into practice by building
                        something awesome.
                    </p>
                </div>
                <motion.div
                    className={styles["about-image"]}
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: { duration: 1 },
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                    whileHover={{ scale: 1.07 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    <div className={styles["image-glow"]}></div>
                    <Image
                        className={`${styles["about-image"]} ${styles["glow"]}`}
                        src={AboutImage}
                        alt="placeholder"
                    />
                </motion.div>
            </div>
            <h2 className={styles.lastyear}>Last year, we had...</h2>
            <div className={styles["shape-container"]}>
                <motion.div className={styles.shape1} />
                <motion.div className={styles.shape2} {...shapeFadeIn} />
                <motion.div className={styles.shape3} {...shapeFadeIn} />
                <motion.div className={styles.shape4} {...shapeFadeIn} />
                <motion.div className={styles.shape5} {...shapeFadeIn} />
            </div>
        </motion.section>
    );
}
