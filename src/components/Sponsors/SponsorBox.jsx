import Image from "next/image";
import styles from "./Sponsors.module.css";
import { motion } from "framer-motion";

export default function SponsorBox({ name, image, link, className, id }) {
    return (
        <motion.a
            href={link}
            target="_blank"
            className={`${styles.sponsorbox} ${className ? className : ""}`}
            rel="noopenner noreferrer"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            id={id ? id : ""}
        >
            <Image
                src={image}
                alt={name}
                className={styles["sponsorbox-image"]}
            />
        </motion.a>
    );
}
