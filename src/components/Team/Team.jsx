import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Member from "./Member";
import { members } from "./Members";
import styles from "./Team.module.css";
import Logo from "@/../public/EurekaIcon2024.png";
import useOnScreen from "@/hooks/useOnScreen";

const shapeFadeIn = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 1, delay: 0.5 },
    },
    viewport: { once: true, amount: 0.8 },
};

const logoFadeIn = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 0.7, delay: 0.5 },
    },
    viewport: { once: true, amount: 1 },
};

const textFadeIn = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 1 },
    },
    viewport: { once: true, amount: 0.8 },
    style: { textAlign: "center" },
};

export default function Team() {
    const gridRef = useRef(null);
    const isOnScreen = useOnScreen(gridRef);

    useEffect(() => {
        let grid = gridRef.current;

        if (isOnScreen && !grid.classList.contains(styles.active)) {
            grid.classList.add(styles.active);
            let gridRect = grid.getBoundingClientRect();
            for (let child of grid.children) {
                if (
                    !child.classList.contains(styles.text) &&
                    !child.classList.contains(styles.logo)
                ) {
                    const rect = child.getBoundingClientRect();
                    let gridX = Math.floor((rect.x - gridRect.x) / rect.width);
                    let gridY = Math.floor((rect.y - gridRect.y) / rect.height);
                    child.style.animationName = styles.fadeIn;
                    child.style.animationDelay = `${
                        (gridX + gridY) * 100 + 500
                    }ms`;
                }
            }
        }
    }, [isOnScreen]);

    return (
        <section id="team" className={styles.team} data-nosnippet={true}>
            <div className={styles.grid} ref={gridRef}>
                <div className={styles.text}>
                    <motion.div {...textFadeIn}>
                        <div className={styles.title}>
                            <h1>Eureka</h1>
                            <h2>HACKS</h2>
                        </div>

                        <h2 className={styles.sectionTitle}>Meet the Team</h2>
                    </motion.div>
                </div>

                <motion.div className={styles.logo} {...logoFadeIn}>
                    <Image
                        className={styles.icon}
                        src={Logo}
                        alt="Eureka! Icon"
                    />
                </motion.div>

                <motion.div className={styles.directorsTitle} {...textFadeIn}>
                    <h2>Meet the Directors</h2>
                </motion.div>
                {members.map((info, index) => {
                    return info.director ? (
                        <Member {...info} key={index} />
                    ) : null;
                })}
            </div>

            <motion.img
                className={styles.shape1}
                src="Shapes/shape1.png"
                {...shapeFadeIn}
            />
            <motion.img
                className={styles.hex1}
                src="Shapes/hex1.png"
                {...shapeFadeIn}
            />
        </section>
    );
}
