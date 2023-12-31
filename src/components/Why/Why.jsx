import Image from "next/image";
import styles from "./Why.module.css";
import { motion } from "framer-motion";
import People from "@/../public/Why/people.jpg";
import AboutImage from "@/../public/About/img.jpg";
import Bot from "@/../public/Why/bot.jpg";
import Winners from "@/../public/Why/idk.jpg";

const shapeFadeIn = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 1, delay: 0.5 },
    },
    viewport: { once: true, amount: 1 },
};

export default function Why() {
    return (
        <motion.section
            id="why"
            className={styles.why}
            initial={{ opacity: 1 }}
            whileInView={{
                opacity: 1,
                transition: { duration: 1 },
            }}
            viewport={{ once: true, amount: 0.8 }}
        >
            {/* <div className={styles["shape-container"]}>
                <motion.div className={styles.shape1} {...shapeFadeIn} />
                <motion.div className={styles.shape2} {...shapeFadeIn} />
                <motion.div className={styles.shape3} {...shapeFadeIn} />
                <motion.div className={styles.shape4} {...shapeFadeIn} />
                <motion.div className={styles.shape5} {...shapeFadeIn} />
            </div> */}
            <h2>No Experience? No Problem.</h2>
            <div className={styles.content}>
                <p>
                    Our hackathon is open to all skill levels, from beginners to
                    experts. We provide workshops and mentors to help you learn
                    new skills and build something awesome. We encourage you to
                    learn new skills and try something new!
                </p>
                <div className={styles.images}>
                    <div className={styles["image-glow1"]}></div>
                    <Image
                        className={`${styles["image1"]} ${styles["glow"]}`}
                        src={People}
                        alt="placeholder"
                    />
                    <div className={styles["image-glow2"]}></div>
                    <Image
                        className={`${styles["image2"]} ${styles["alternate-glow"]}`}
                        src={Winners}
                        alt="placeholder"
                    />
                    <div className={styles["image-glow3"]}></div>
                    <Image
                        className={`${styles["image3"]} ${styles["glow"]}`}
                        src={Bot}
                        alt="placeholder"
                    />
                </div>
            </div>
        </motion.section>
    );
}
