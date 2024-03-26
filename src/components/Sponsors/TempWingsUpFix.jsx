import Image from "next/image";
import styles from "./Sponsors.module.css";
import { motion } from "framer-motion";

export default function TempWingsUpFix({ name, image, link }) {
    return (
        <motion.a
            href={link}
            target="_blank"
            className={`${styles.tempwingsupfix}`}
            rel="noopenner noreferrer"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
            <Image src={image} alt={name} />
        </motion.a>
    );
}
